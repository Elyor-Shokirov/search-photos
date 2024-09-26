import { FaTrashCan } from "react-icons/fa6";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
  const { likedImages, dispatch } = useGlobalContext();

  const deleteImages = (image) => {
    dispatch({ type: "DELETE", payload: image });
  };

  if (!likedImages.length) {
    return (
      <h1 className="text-center mt-[50px]">
        You dont have any liked images :(
      </h1>
    );
  }
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="flex justify-center mt-6">
        <div className="font-semibold text-2xl">Liked Images</div>
      </div>
      <ResponsiveMasonry
        className="mt-5"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px" columnsCount={3}>
          {likedImages.length &&
            likedImages.map((image) => {
              const { id, urls, links, user } = image;
              return (
                <Image
                  key={id}
                  urls={urls}
                  user={user}
                  links={links}
                  trashIcon={
                    <FaTrashCan
                      className="text-red-600"
                      onClick={() => deleteImages(image.id)}
                    />
                  }
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default LikedImages;
