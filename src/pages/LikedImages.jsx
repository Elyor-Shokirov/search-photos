import { Link } from "react-router-dom";
import { ImageContainer } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
  const { likedImages } = useGlobalContext();
  console.log(likedImages);

  if (likedImages.length == 0) {
    return (
      <div className="flex  justify-center items-center h-full gap-10 flex-col px-3 ">
        <h1 className="text-center md:text-4xl font-monserat text-sm">
          You dont have any liked images :(
        </h1>
        <Link to="/">
          <button className="btn btn-sm md:btn-md btn-primary">Go Home</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="max-w-[1440px] m-auto mb-20 px-3 md:p-0 h-full">
        <div className="flex justify-center mt-6">
          <div className="font-semibold text-2xl mb-5">Liked Images</div>
        </div>
        {likedImages.length > 0 && <ImageContainer images={likedImages} />}
      </div>
    </div>
  );
}

export default LikedImages;
