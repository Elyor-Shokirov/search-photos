import { createContext, useEffect, useReducer } from "react";
export const GlobalContext = createContext();

const dataFromLocal = () => {
  return (
    JSON.parse(localStorage.getItem("my-splash")) || {
      colors: ["#A594f9", "#8FD14F", "#CD5C08"],
      likedImages: [],
      images: [],
      searchTitle: null,
    }
  );
};

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_NAV_BG":
      return { ...state, navBgColor: payload };
    case "TAKE_ONCHANGE_INPUT":
      return { ...state, searchTitle: payload };
    case "TAKE_IMAGE_DATA":
      return { ...state, images: [...state.images, ...payload] };
    case "ADD_LIKED_IMAGES":
      return { ...state, likedImages: payload };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, dataFromLocal());

  useEffect(() => {
    localStorage.setItem("my-splash", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
