import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
  const { likedImages } = useGlobalContext();

  console.log(likedImages);
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="flex justify-center mt-6">
        <div className="font-semibold text-2xl">Liked Images</div>
      </div>
      <ResponsiveMasonry
        className="mt-5"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px" columnsCount={3}>
          {likedImages &&
            likedImages.map((photo) => {
              return <img key={photo.id} src={photo.urls.full} alt="photo" />;
            })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default LikedImages;
