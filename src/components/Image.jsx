import {
  FaCloudDownloadAlt,
  FaHeart,
  FaRegHeart,
  FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../hooks/useGlobalContext";

/* eslint-disable react/prop-types */
function Image({ images, added, trashIcon }) {
  const { links, urls, alt_description, user } = images;

  const { dispatch, likedImages, downloadImages } = useGlobalContext();

  const addLikedImage = (images, e) => {
    console.log("bosildi");
    e.preventDefault();
    const isLikedImage = likedImages.some((img) => {
      return images.id === img.id;
    });
    if (!isLikedImage) {
      dispatch({ type: "LIKE", payload: images });
      toast.success("The image has been added to your favorite images", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch({ type: "UNLIKE", payload: images.id });
      toast.warning("The picture has been removed from the Favorites!", {
        position: "bottom-right",
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

  const handleAddDownloadImages = (images, e) => {
    e.preventDefault();
    const addDownloadImage = downloadImages.some((img) => {
      return images.id === img.id;
    });

    if (!addDownloadImage) {
      dispatch({ type: "DOWNLOAD", payload: images });
    }
  };

  const handleDeleteDownloadImages = (images, e) => {
    e.preventDefault();
    const addDownloadImage = downloadImages.some((img) => {
      return images.id === img.id;
    });
    if (addDownloadImage) {
      dispatch({ type: "DELETEDOWNLOAD", payload: images.id });
    }
  };

  const downloadButtonIimage = (e) => {
    e.preventDefault();
    window.open(links.download + "&force=true", "_blank");
  };

  const closeBtn = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_4").close();
  };

  return (
    <Link to={`/imageinfo/${images.id}`}>
      <div className="relative group">
        {!added && (
          <span
            onClick={(e) => addLikedImage(images, e)}
            className=" absolute right-0 mt-2 mr-3 md:mt-5 md:mr-3 hover:cursor-pointer bg-white rounded grid md:w-8 md:h-8 w-5 h-5 place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100">
            <FaRegHeart className="text-red-700" />
          </span>
        )}
        {added && (
          <span
            onClick={(e) => addLikedImage(images, e)}
            className=" absolute right-0 mt-2 mr-3 md:mt-5 md:mr-3 hover:cursor-pointer bg-white rounded grid md:w-8 md:h-8 w-5 h-5 place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100">
            <FaHeart className="text-rose-600" />
          </span>
        )}

        {<img src={urls.regular} alt={alt_description} />}

        {trashIcon ? (
          <span
            onClick={(e) => {
              e.preventDefault(); // Sahifani o'zgartirishni to'xtatish
              const modal = document.getElementById("my_modal_4"); // Modalni olish
              if (modal) {
                modal.showModal();
              }
            }}
            className="right-0 absolute bottom-2 mt-5 mr-3 hover:cursor-pointer bg-slate-200 rounded grid md:w-8 md:h-8 w-6 h-6 place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100">
            <FaTrashAlt className="text-red-800 text-[12px] md:text-[15px]" />
          </span>
        ) : (
          <span
            onClick={(e) => handleAddDownloadImages(images, e)}
            className="right-0 absolute bottom-2 mt-5 mr-3 hover:cursor-pointer bg-slate-200 rounded grid md:w-8 md:h-8 w-5 h-4 place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100">
            <span onClick={(e) => downloadButtonIimage(e)}>
              <FaCloudDownloadAlt className="text-brandColor text-[15px]" />
            </span>
          </span>
        )}

        <span className="flex left-2 absolute bottom-[2px] md:bottom-2 mt-5 mr-3 hover:cursor-pointer  rounded  px-2 h-8 place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100">
          <img
            className="md:w-8 md:h-8 md:rounded-full w-5 h-5 rounded-full"
            src={user.profile_image.large}
            alt={user.name + " avatar"}
          />
          <p className="text-white font-monserat ml-2 text-[10px] md:text-base">
            {user.first_name} {user.last_name}
          </p>
        </span>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-xl">
            <div className="flex justify-center ">
              <FaTrashAlt className="text-center text-5xl" />
            </div>

            <p className="py-4 text-center">
              Are you sure you want to delete this item?
            </p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-5">
                <button onClick={(e) => closeBtn(e)} className="btn">
                  No, cancel
                </button>
                <button
                  onClick={(e) => handleDeleteDownloadImages(images, e)}
                  className="btn btn-error text-white">
                  Yes, I'm sure
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </Link>
  );
}
export default Image;
