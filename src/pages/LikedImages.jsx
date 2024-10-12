import { Link } from "react-router-dom";
import { ImageContainer } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
  const { likedImages } = useGlobalContext();

  if (likedImages.length == 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-10 px-3">
        <h1 className="text-center font-monserat text-sm md:text-4xl">
          You dont have any liked images :(
        </h1>
        <Link to="/">
          <button className="btn btn-primary btn-sm md:btn-md">Go Home</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="m-auto mb-20 h-full max-w-[1440px] px-3 md:p-0">
        <div className="mt-6 flex justify-center">
          <div className="mb-5 text-2xl font-semibold">Liked Images</div>
        </div>
        {likedImages.length > 0 && <ImageContainer images={likedImages} />}
      </div>
    </div>
  );
}

export default LikedImages;
