//read more button add
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image, SearchBar } from "../components";
import { useFetch } from "../hooks/useFetch/useFetch";
import { useGlobalContext } from "../hooks/useGlobalContext";
function Home() {
  const { dispatch, searchTitle, images } = useGlobalContext();
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }&query=${searchTitle}&page=${pageNumber}`
  );

  useEffect(() => {
    if (data) {
      dispatch({ type: "TAKE_IMAGE_DATA", payload: data.results });
    }
  }, [data]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  // const addLikedImages = (likedImageId) => {
  //   if (likedImageId && !likedImages.includes(likedImageId)) {
  //     setLikedImages((prevState) => [...prevState, likedImageId]);
  //     dispatch({ type: "ADD_LIKED_IMAGES", payload: likedImages });
  //   }
  // };

  // // if (error) {
  // //   return <div>Error: {error.message}</div>;
  // // }

  // // if (data && data.results) {
  // //   console.log(data.results); // Log the results array from Unsplash
  // // }
  return (
    <div className="max-w-[1440px] m-auto  pl-5 pr-5">
      <SearchBar />
      <div className="mt-8 ">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px" columnsCount={3}>
            {/* {data.results &&
              data.results.map((image) => {
                const handleDownload = () => {
                  saveAs(image.urls.full, "image.jpg");
                };

                return (
                  <div key={image.id}>
                    <div className="relative w-auto z-0">
                      <img
                        style={{ width: "100%", display: "block" }}
                        src={image.urls.full}
                        alt="Image"
                      />

                      <div className="absolute w-full h-full top-0 left-0 bg-violet-100  opacity-0 z-0 transition-opacity duration-300 hover:opacity-100 hover:bg-opacity-60 hover:cursor-pointer hover:visable">
                        <div className="z-10">
                          <span className="flex justify-end mt-2 mr-3">
                            <RiHeartLine
                              className="text-2xl text-red-700"
                              onClick={() => addLikedImages(image)}
                            />
                          </span>
                          <div>
                            <button
                              onClick={handleDownload}
                              className="absolute top-2 left-3 text-3xl">
                              <FaCloudDownloadAlt className="text-brandColor" />
                            </button>
                          </div>
                          <div className="absolute bottom-2 left-2">
                            <div className="p-2 flex items-center h-full border-[2px] border-brandColor rounded">
                              <div className="mt-2 flex space-x-2">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src={image.user.profile_image.large}
                                  alt={`${image.user.first_name}'s profile`}
                                />
                                <h1 className="text-lg font-semibold ml-[10px]">
                                  {image.user.first_name} {image.user.last_name}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })} */}
            {images.length &&
              images.map((image) => {
                const { id, urls, links, user } = image;
                return <Image key={id} urls={urls} user={user} links={links} />;
              })}
          </Masonry>
        </ResponsiveMasonry>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className="border py-2 w-full mt-10 bg-brandColor rounded text-white hover:bg-blue-400">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Home;
