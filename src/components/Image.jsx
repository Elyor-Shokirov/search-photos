import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiHeartLine } from "react-icons/ri";
import { useGlobalContext } from "../hooks/useGlobalContext";
/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
function Image({ urls, alt, links, user, image, trashIcon }) {
  const { dispatch, likedImages } = useGlobalContext();
  console.log(likedImages);

  const addLikedImage = (image) => {
    const isLikedImage = likedImages.some(
      (isLikedImage) => image.id === isLikedImage.id
    );
    if (isLikedImage) {
      toast.warning("This image has previously been favorited", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch({ type: "ADD_LIKED_IMAGES", payload: image });
      toast.success("The image has been added to your favorite images", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="relative group">
      <span className=" absolute right-0 mt-5 mr-3 hover:cursor-pointer bg-slate-200 rounded grid w-8 h-8 place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100">
        {trashIcon ? (
          trashIcon
        ) : (
          <RiHeartLine
            className="text-2xl text-red-700"
            onClick={() => addLikedImage(image)}
          />
        )}
      </span>
      <img
        src={urls.regular}
        alt="Image"
        style={{ width: "100%", display: "block" }}
      />
      <span className=" right-0 absolute bottom-2 mt-5 mr-3 hover:cursor-pointer bg-slate-200 rounded grid w-8 h-8 place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100">
        <FaCloudDownloadAlt className="text-brandColor" />
      </span>
      <span className=" left-2 absolute bottom-2 mt-5 mr-3 hover:cursor-pointer bg-slate-200 rounded grid px-2 h-8 place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100">
        {user.first_name} {user.last_name}
      </span>
    </div>
  );
}
export default Image;
