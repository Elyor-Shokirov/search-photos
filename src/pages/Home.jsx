//read more button add
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { SearchBar } from "../components";
import { useFetch } from "../hooks/useFetch/useFetch";

import { useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import { ImageContainer } from "../components";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  if (!search) {
    toast.warning("Please enter the name of the image you want to search for", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return null;
  } else {
    return search;
  }
};

function Home() {
  const searchParamFormAction = useActionData();
  const [allImages, setAllImages] = useState([]);

  const randomWords = [
    "Cars",
    "Finland",
    "Uzbekistan",
    "Animals",
    "Cats",
    "IT",
    "Computers",
    "Youtube",
    "google",
    "Apple",
  ];

  // const { dispatch, searchTitle, images } = useGlobalContext();
  const [pageParam, setPageParam] = useState(1);

  const prevSearchParam = useRef(searchParamFormAction);

  const [randomQuery, setRandomQuery] = useState();

  useEffect(() => {
    const randomWord =
      randomWords[Math.floor(Math.random() * randomWords.length)];
    setRandomQuery(randomWord);
  }, []);

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }&query=${searchParamFormAction ?? randomQuery}&page=${pageParam}`,
  );

  useEffect(() => {
    if (data && data.results) {
      setAllImages((prevImage) => {
        return pageParam === 1 ? data.results : [...prevImage, ...data.results];
      });
    }
  }, [data]);

  useEffect(() => {
    if (searchParamFormAction != prevSearchParam.current) {
      setAllImages([]);
      setPageParam(1);
      prevSearchParam.current = searchParamFormAction;
    }
  }, [searchParamFormAction]);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  // useEffect(() => {
  //   if (data) {
  //     if (pageNumber == 1) {
  //       dispatch({ type: "TAKE_IMAGE_DATA", payload: data.results });
  //     } else {
  //       dispatch({ type: "ALL_IMAGE_DATA", payload: data.results });
  //     }
  //   }
  // }, [data, searchTitle]);

  // useEffect(() => {
  //   setPageNumber(1);
  // }, [searchTitle]);

  return (
    <div>
      <div className="m-auto max-w-[1440px] pl-5 pr-5">
        <SearchBar />
        <div className="mt-8">
          {isPending && <h1>Loading...</h1>}
          {allImages.length > 0 && <ImageContainer images={allImages} />}
          <button
            onClick={() => setPageParam(pageParam + 1)}
            className="btm-info btn mb-10 mt-10 w-full rounded border bg-brandColor py-2 text-white hover:bg-blue-400"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
