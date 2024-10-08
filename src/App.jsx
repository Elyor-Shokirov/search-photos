import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { toast } from "react-toastify";
import ProtectedRouters from "./components/ProtectedRouters";
import { auth } from "./fireBase/firebaseConfig";
import { useGlobalContext } from "./hooks/useGlobalContext";
import MainLayout from "./Layout/MainLayout";
import {
  About,
  Contact,
  ForgatPassword,
  Home,
  ImageInfo,
  LikedImages,
  SignIn,
} from "./pages";
import DownloadImages from "./pages/DownloadImages";
import EditProfilePage, { action as EditAction } from "./pages/EditProfilePage";
import { action as HomeAction } from "./pages/Home";
import Register, { action as RegisterAction } from "./pages/Register";
import { action as SigInAction } from "./pages/SignIn";
function App() {
  const { user, dispatch, authReady } = useGlobalContext();

  const routers = createBrowserRouter([
    {
      path: "/",

      element: (
        <ProtectedRouters user={user}>
          <MainLayout />
        </ProtectedRouters>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/likedimages",
          element: <LikedImages />,
        },
        {
          path: "/downloadImages",
          element: <DownloadImages />,
        },
        {
          path: "/profile",
          element: <EditProfilePage />,
          action: EditAction,
        },
        {
          path: "/imageinfo/:id",
          element: <ImageInfo />,
        },
      ],
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
    {
      path: "/forgotpassword",
      element: <ForgatPassword />,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <SignIn />,
      action: SigInAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  return <>{authReady && <RouterProvider router={routers} />}</>;
}

export default App;
