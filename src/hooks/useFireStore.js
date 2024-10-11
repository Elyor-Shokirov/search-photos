import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../fireBase/firebaseConfig";
export const useFireStore = () => {
  const addDocument = (collectionName, id, data) => {
    setDoc(doc(db, collectionName, id), data)
      .then(() => {
        toast.success("You liked this image ❤️");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const deleteDocument = (collectionName, id, data) => {
    deleteDoc(doc(db, collectionName, id), data)
      .then(() => {
        toast.error("You delete this image 🗑");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return { addDocument, deleteDocument };
};
