import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../fireBase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";

export function useLogin() {
  const { dispatch } = useGlobalContext();

  const loginWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcom ${user.displayName}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Email or Password is not correct", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return { loginWithEmail };
}
