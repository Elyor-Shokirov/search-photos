import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../fireBase/firebaseConfig";

export const useCollection = (collectionName) => {
  const [data, setData] = useState();
  useEffect(() => {
    // Reference the collection instead of a document
    const collectionRef = collection(db, collectionName);

    // Listen for real-time updates to the collection
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const queryData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(queryData);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [collectionName]);

  return { data };
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
