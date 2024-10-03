import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRouters from "./components/ProtectedRouters";
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
import { action as HomeAction } from "./pages/Home";
import Register, { action as RegisterAction } from "./pages/Register";
import { action as SigInAction } from "./pages/SignIn";
function App() {
  const { user } = useGlobalContext();

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
          path: "/imageinfo/:id",
          element: <ImageInfo />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
      action: RegisterAction,
    },
    {
      path: "/forgotpassword",
      element: <ForgatPassword />,
    },
    {
      path: "/login",
      element: <SignIn />,
      action: SigInAction,
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
