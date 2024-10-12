import { useEffect, useState } from "react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import { PiCaretDown } from "react-icons/pi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useFireStore } from "../hooks/useFireStore";
import { useGlobalContext } from "../hooks/useGlobalContext";

/* eslint-disable react/prop-types */
function Image({ images, added, trashIcon }) {
  const { links, urls, alt_description, user } = images;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 430);

  const [isOpen, setIsOpen] = useState(false);

  const {
    dispatch,
    likedImages,
    downloadImages,
    user: authUser,
  } = useGlobalContext();

  const { addDocument, deleteDocument } = useFireStore();
  let screen = window.innerWidth >= 430;
  const addLikedImage = (images, e) => {
    e.preventDefault();
    const isLikedImage = likedImages.find((img) => {
      return images.id === img.id;
    });
    if (!isLikedImage) {
      addDocument("likedImages", { ...images, uid: authUser.uid });
    } else {
      deleteDocument("likedImages", isLikedImage._id);
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
    const addDownloadImage = downloadImages.find((img) => {
      return images.id === img.id;
    });

    if (!addDownloadImage) {
      addDocument("downloadImages", { ...images, uid: authUser.uid });
    } else {
      deleteDocument("downloadImages", addDownloadImage._id);
    }
  };

  const handleDeleteDownloadImages = (images, e) => {
    e.preventDefault();
    const addDownloadImage = downloadImages.find((img) => {
      return images.id === img.id;
    });
    if (addDownloadImage) {
      deleteDocument("downloadImages", addDownloadImage._id);
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
      <div className="group relative">
        {!added && (
          <span
            onClick={(e) => addLikedImage(images, e)}
            className="md:custom_hover_image absolute bottom-[-30px] rounded border-[1px] border-[#767676] p-1 md:bottom-auto md:border-none"
          >
            <FaHeart className="text-sm text-brandColor md:text-[#767676]" />
          </span>
        )}
        {added && (
          <span
            onClick={(e) => addLikedImage(images, e)}
            className="md:custom_hover_image absolute bottom-[-30px] rounded border-[1px] border-red-600 bg-red-600 p-1 md:bottom-auto md:bg-red-600"
          >
            <FaHeart className="text-sm text-white" />
          </span>
        )}

        {
          <img
            src={urls.regular}
            alt={alt_description}
            className="mb-12 mt-2 md:mb-0 md:mt-0"
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
            className="md:download_trash_icon_classes visible absolute bottom-[-40px] right-0 opacity-100 md:bottom-2"
          >
            {isSmallScreen ? (
              <button className="h-[32px] rounded-l border-[1px] border-[#d1d1d1] px-[11px] text-[#767676]">
                Delete
              </button>
            ) : (
              <FaTrashAlt className="text-[12px] text-red-800 md:text-[15px]" />
            )}
          </span>
        ) : (
          <span
            onClick={(e) => handleAddDownloadImages(images, e)}
            className="md:download_trash_icon_classes absolute bottom-[-40px] right-0 md:bottom-2"
          >
            <span className="flex items-center">
              {isSmallScreen ? (
                <>
                  <button
                    onClick={(e) => downloadButtonIimage(e)}
                    className="h-[32px] rounded-l border-[1px] border-[#d1d1d1] px-[11px] text-[#767676]"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handleOpenDropDown()}
                    className="!pointer-events-noneborder-l-0 h-[32px] rounded-r border-[1px] border-[#d1d1d1] px-[11px] text-[#767676]"
                  >
                    <PiCaretDown />
                  </button>
                  {isOpen && (
                    <div>
                      <div
                        className={`transform transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"
                        } absolute right-1 z-20 mt-6 w-48 rounded-lg bg-white shadow-lg`}
                        style={{ display: isOpen ? "block" : "none" }}
                      >
                        <ul className="py-2">
                          <li
                            onClick={() =>
                              window.open(urls.small + "&force=true", "_blank")
                            }
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                          >
                            <span className="myPharagrap">Smal</span>
                            <span className="myPharagrap">(640 x 960)</span>
                          </li>
                          <li
                            onClick={() =>
                              window.open(urls.raw + "&force=true", "_blank")
                            }
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                          >
                            <span className="myPharagrap">Medium</span>
                            <span className="myPharagrap">(640 x 960)</span>
                          </li>
                          <li
                            onClick={() =>
                              window.open(urls.full + "&force=true", "_blank")
                            }
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                          >
                            <span className="myPharagrap">Large</span>{" "}
                            <span className="myPharagrap">(2400 x 3600)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <GrDownload
                  className="text-black"
                  onClick={(e) => downloadButtonIimage(e)}
                />
              )}
            </span>
          </span>
        )}

        <span className="md:user_info_classes absolute top-[-25px] flex items-center pb-2 md:bottom-2 md:top-auto">
          <img
            className="h-5 w-5 rounded-full md:h-8 md:w-8 md:rounded-full"
            src={user.profile_image.large}
            alt={user.name + " avatar"}
          />
          <p className="ml-2 font-monserat text-[10px] text-xs font-bold md:text-base md:font-medium md:text-white">
            {user.first_name} {user.last_name}
          </p>
        </span>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-xl">
            <div className="flex justify-center">
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
                  className="btn btn-error text-white"
                >
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
