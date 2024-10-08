import { useEffect, useState } from "react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import { PiCaretDown } from "react-icons/pi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../hooks/useGlobalContext";

/* eslint-disable react/prop-types */
function Image({ images, added, trashIcon }) {
  const { links, urls, alt_description, user } = images;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);

  const [isOpen, setIsOpen] = useState(false);

  const { dispatch, likedImages, downloadImages } = useGlobalContext();
  let screen = window.innerWidth >= 430;
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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleOpenDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Link to={`/imageinfo/${images.id}`}>
      <div className="relative group">
        {!added && (
          <span
            onClick={(e) => addLikedImage(images, e)}
            className="md:custom_hover_image absolute bottom-[-30px] md:bottom-auto border-[1px] border-[#767676] p-1 rounded md:border-none">
            <FaHeart className="text-brandColor md:text-[#767676] text-sm " />
          </span>
        )}
        {added && (
          <span
            onClick={(e) => addLikedImage(images, e)}
            className="md:custom_hover_image absolute bottom-[-30px] md:bg-red-600 bg-red-600 md:bottom-auto border-[1px] border-red-600 p-1 rounded">
            <FaHeart className="text-white text-sm " />
          </span>
        )}

        {
          <img
            src={urls.regular}
            alt={alt_description}
            className="md:mt-0 md:mb-0 mt-2 mb-12"
          />
        }

        {trashIcon ? (
          <span
            onClick={(e) => {
              e.preventDefault(); // Sahifani o'zgartirishni to'xtatish
              const modal = document.getElementById("my_modal_4"); // Modalni olish
              if (modal) {
                modal.showModal();
              }
            }}
            className="md:download_trash_icon_classes bottom-[-40px]  absolute right-0  md:bottom-2 visible opacity-100">
            {isSmallScreen ? (
              <button className="border-[1px] border-[#d1d1d1] text-[#767676] h-[32px] px-[11px] rounded-l ">
                Delete
              </button>
            ) : (
              <FaTrashAlt className="text-red-800 text-[12px] md:text-[15px]" />
            )}
          </span>
        ) : (
          <span
            onClick={(e) => handleAddDownloadImages(images, e)}
            className="md:download_trash_icon_classes bottom-[-40px]  absolute right-0  md:bottom-2">
            <span className="flex items-center">
              {isSmallScreen ? (
                <>
                  <button
                    onClick={(e) => downloadButtonIimage(e)}
                    className="border-[1px] border-[#d1d1d1] text-[#767676] h-[32px] px-[11px] rounded-l ">
                    Download
                  </button>
                  <button
                    onClick={() => handleOpenDropDown()}
                    className="border-[1px] border-[#d1d1d1] text-[#767676] h-[32px] px-[11px] rounded-r !pointer-events-noneborder-l-0">
                    <PiCaretDown />
                  </button>
                  {isOpen && (
                    <div>
                      <div
                        className={`transition-all duration-300 transform ease-in-out ${
                          isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4"
                        } absolute mt-6 right-1 w-48 bg-white shadow-lg rounded-lg  z-20`}
                        style={{ display: isOpen ? "block" : "none" }}>
                        <ul className="py-2">
                          <li
                            onClick={() =>
                              window.open(urls.small + "&force=true", "_blank")
                            }
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <span>Smal</span> <span>(640 x 960)</span>
                          </li>
                          <li
                            onClick={() =>
                              window.open(urls.raw + "&force=true", "_blank")
                            }
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <span>Medium</span> <span>(640 x 960)</span>
                          </li>
                          <li
                            onClick={() =>
                              window.open(urls.full + "&force=true", "_blank")
                            }
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <span>Large</span> <span>(2400 x 3600)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <GrDownload />
              )}
            </span>
          </span>
        )}

        <span className="md:user_info_classes absolute md:bottom-2 md:top-auto top-[-25px] pb-2 flex items-center ">
          <img
            className="md:w-8 md:h-8 md:rounded-full w-5 h-5 rounded-full"
            src={user.profile_image.large}
            alt={user.name + " avatar"}
          />
          <p className="md:text-white font-monserat ml-2 text-[10px] md:text-base md:font-medium font-bold text-xs">
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
