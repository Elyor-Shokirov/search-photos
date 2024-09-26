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
      if (pageNumber == 1) {
        dispatch({ type: "TAKE_IMAGE_DATA", payload: data.results });
      } else {
        dispatch({ type: "ALL_IMAGE_DATA", payload: data.results });
      }
    }
  }, [data, searchTitle]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchTitle]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[1440px] m-auto  pl-5 pr-5">
      <SearchBar />
      <div className="mt-8 ">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px" columnsCount={5}>
            {images.length == 0 ? (
              <div className="flex justify-center items-center w-full">
                <p className="mr-2 text-black font-bold">
                  {`"${searchTitle}"`}
                </p>
                <p>no images found for the word</p>
              </div>
            ) : (
              images.map((image) => {
                const { id, urls, links, user } = image;
                return (
                  <Image
                    key={id}
                    urls={urls}
                    user={user}
                    links={links}
                    image={image}
                  />
                );
              })
            )}
          </Masonry>
        </ResponsiveMasonry>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className="mb-10 border py-2 w-full mt-10 bg-brandColor rounded text-white hover:bg-blue-400">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Home;
