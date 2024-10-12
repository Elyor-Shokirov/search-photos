import { createContext, useEffect, useReducer } from "react";
import { useCollection } from "../hooks/useCollection";
export const GlobalContext = createContext();

// const dataFromLocal = () => {
//   return (
//     JSON.parse(localStorage.getItem("my-splash-data")) || {
//       likedImages: [],
//       downloadImages: [],
//     }
//   );
// };

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "AUTH_READY":
      return { ...state, authReady: true };
    case "LOG_OUT":
      return { ...state, user: null };
    case "ADD_LIKEDIMAGES":
      return { ...state, likedImages: payload };
    case "BLOGS":
      return { ...state, blogs: payload };
    case "DOWNLOAD":
      return { ...state, downloadImages: payload };

    case "DELETEDOWNLOAD":
      return {
        ...state,
        downloadImages: state.downloadImages.filter(
          (imege) => imege.id !== payload,
        ),
      };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((imege) => imege.id !== payload),
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    authReady: false,
    likedImages: [],
    blogs: [],
    downloadImages: [],
  });

  const { data: likedImages } = useCollection("likedImages", [
    "uid",
    "==",
    state.user && state.user.uid,
  ]);

  const { blog: blogs } = useCollection("images");
  const { data: downloadImages } = useCollection("downloadImages", [
    "uid",
    "==",
    state.user && state.user.uid,
  ]);

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (likedImages)
      dispatch({ type: "ADD_LIKEDIMAGES", payload: likedImages });
  }, [likedImages]);

  useEffect(() => {
    if (downloadImages) dispatch({ type: "DOWNLOAD", payload: downloadImages });
  }, [downloadImages]);
  useEffect(() => {
    if (blogs) dispatch({ type: "BLOGS", payload: blogs });
  }, [blogs]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
