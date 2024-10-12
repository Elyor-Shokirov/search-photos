import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../fireBase/firebaseConfig";

export const useCollection = (collectionName, whereData = []) => {
  const [data, setData] = useState(null);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (whereData[2]) {
      const q = query(collection(db, collectionName), where(...whereData));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const queryData = [];
        querySnapshot.forEach((doc) => {
          queryData.push({ _id: doc.id, ...doc.data() });
        });
        setData(queryData);
      });

      return () => unsubscribe(); // Cleanup function
    }
  }, [whereData[2]]); // collectionName ga bog'liq

  useEffect(() => {
    const collectionRef = collection(db, collectionName);
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const queryData = querySnapshot.docs.map((doc) => ({
        _id: doc.id,
        ...doc.data(),
      }));
      setBlog(queryData);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { data, blog };
};

// const getData = async () => {
//  const querySnapshot = await getDocs(collection(db, collectionName));
//  const queryData = [];
//  querySnapshot.forEach((doc) => {
//    queryData.push({ id: doc.id, ...doc.data() });
//  });
//  setData(queryData);
// };
// getData();

// const collectionRef = collection(db, collectionName);
// const q = query(collection(db, collectionName), where("state", "==", "CA"));

// const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
//   const queryData = querySnapshot.docs.map((doc) => ({
//     _id: doc.id,
//     ...doc.data(),
//   }));
//   setData(queryData);
// });

// return () => unsubscribe();
// }, [collectionName]);

// return { data };
