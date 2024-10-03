import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../FireBase/fireBaseConfig";
import { useGlobalContext } from "./useGlobalContext";
export const useRegister = () => {
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();
  const registerWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
        toast.success("welcom");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return { registerWithGoogle };
};
