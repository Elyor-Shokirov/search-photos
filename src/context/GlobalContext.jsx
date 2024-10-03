import { createContext, useEffect, useReducer } from "react";
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
    case "LIKE":
      return { ...state, likedImages: [...state.likedImages, payload] };
    case "DOWNLOAD":
      return {
        ...state,
        downloadImages: [...state.downloadImages, payload],
      };
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
    likedImages: [],
    downloadImages: [],
  });

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
