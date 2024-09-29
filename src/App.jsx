import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import { About, Contact, Home, ImageInfo, LikedImages } from "./pages";
import DownloadImages from "./pages/DownloadImages";
import { action as HomeAction } from "./pages/Home";
function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
