import dayjs from "dayjs";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaAudioDescription, FaDownload } from "react-icons/fa";
import { FiEye, FiUser } from "react-icons/fi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch/useFetch";

function ImageInfo() {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/photos/${id}?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`
  );

  if (isPending) {
    <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Error loading data</h1>;
  }

  // Destructure the data only if it exists
  if (data) {
    const {
      urls,
      location,
      user,
      exif,
      created_at,
      description,
      likes,
      downloads,
      views,
      alt_description,
    } = data;

    console.log(data);

    return (
      <div className="max-w-[1440px] mx-auto ">
        <h3 className="text-center text-4xl font-monserat font-bold mt-7">
          Info Photo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-12 mb-9">
          <div className="col-span-12 md:col-span-6">
            <div className="p-5 ">
              <img
                className="rounded"
                src={urls.regular}
                alt={alt_description}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="p-5">
              <div className="flex gap-1">
                <div className="font-monserat grid items-center flex-col justify-start">
                  <span className="font-semibold flex items-center gap-1 justify-start mb-5">
                    <FiUser className="font-semibold" /> Author:{" "}
                    <p className="font-light">{user.first_name}</p>
                    <p className="font-light">{user.last_name}</p>
                  </span>
                  <span className="font-semibold flex items-center gap-1 justify-start mb-5">
                    <FaAudioDescription />
                    Description: <p className="font-light">{description}</p>
                  </span>
                  <span className="font-semibold flex items-center gap-1 justify-start mb-5">
                    <MdOutlineCreateNewFolder />
                    Created:{" "}
                    <p className="font-light">
                      {dayjs(created_at).format("DD-MM-YYYY")}
                    </p>
                  </span>
                  <span className="font-semibold flex items-center gap-1 justify-start mb-5">
                    <AiOutlineLike />
                    Likes: <p className="font-light">{likes}</p>
                  </span>
                  <span className="font-semibold flex items-center gap-1 justify-start mb-5">
                    <SlLocationPin />
                    Location: <p className="font-light">{location.name}</p>
                  </span>
                  <span className="font-semibold flex items-center gap-1 justify-start mb-5">
                    <FaDownload />
                    Downloads: <p className="font-light">{downloads}</p>
                  </span>
                  <span className="font-semibold flex items-center gap-1 justify-start mb-10">
                    <FiEye />
                    views: <p className="font-light">{views}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default ImageInfo;
