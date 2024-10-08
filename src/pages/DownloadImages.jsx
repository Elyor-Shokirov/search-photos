import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImageContainer } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";

function DownloadImages() {
  const { downloadImages } = useGlobalContext();
  if (downloadImages.length == 0) {
    return (
      <div className="h-full ">
        <div className="flex  justify-center items-center h-full gap-10 flex-col px-3 ">
          <h1 className="text-center md:text-4xl font-monserat text-sm">
            You have no copied images :(
          </h1>
          <Link to="/">
            <button className="btn btn-sm md:btn-md btn-primary">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="max-w-[1440px] m-auto mb-20 px-3 md:p-0 h-full">
        <div className="flex justify-center mt-6">
          <div className="font-semibold text-2xl font-monserat mb-5">
            Copied pictures
          </div>
        </div>
        {downloadImages.length > 0 && (
          <ImageContainer images={downloadImages} trashIcon={<FaTrashAlt />} />
        )}
      </div>
    </div>
  );
}

export default DownloadImages;
