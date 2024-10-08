import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"; // Firebase Storage uchun kerakli funksiya
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, storage } from "../fireBase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";

export function useEdit() {
  const { dispatch } = useGlobalContext(); // Call useGlobalContext to get dispatch
  const navigate = useNavigate();
  const editWithConfig = async (
    first_name,
    last_name,
    password,
    email,
    avatar,
    currentPassword,
  ) => {
    const displayName = `${first_name} ${last_name}`;

    try {
      let photoURL = null;

      if (avatar) {
        const storageRef = ref(storage, `avatars/${auth.currentUser.uid}`);
        const snapshot = await uploadBytes(storageRef, avatar);
        photoURL = await getDownloadURL(snapshot.ref);
      }

      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL || auth.currentUser.photoURL,
      });

      if (auth.currentUser.email) {
        await updateEmail(auth.currentUser, email);
      }

      if (password) {
        await updatePassword(auth.currentUser, password);
      }

      const updatedUser = auth.currentUser;
      dispatch({ type: "LOGIN", payload: updatedUser });
      navigate("/");
      toast.success(`Your profile has been modified successfully`);
    } catch (error) {
      console.error("Error updating profile:", error.message);
      toast.error(`Failed to update profile: ${error.message}`);
    }
  };

  return { editWithConfig };
}
