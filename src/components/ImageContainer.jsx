/* eslint-disable react/prop-types */
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Image from "./Image";

function ImageContainer({ images, trashIcon }) {
  const { likedImages } = useGlobalContext();
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
      <Masonry gutter="10px" columnsCount={5}>
        {images.map((image) => {
          return (
            <Image
              trashIcon={trashIcon}
              key={image.id}
              images={image}
              added={likedImages.some((img) => img.id == image.id)}
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImageContainer;
