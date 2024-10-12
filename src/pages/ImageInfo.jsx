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
    }`,
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

    return (
      <div className="mx-auto max-w-[1440px]">
        <h3 className="mt-7 text-center font-monserat text-4xl font-bold">
          Info Photo
        </h3>
        <div className="mb-9 grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <div className="p-5">
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
                <div className="grid flex-col items-center justify-start font-monserat">
                  <span className="mb-5 flex items-center justify-start gap-1 font-semibold">
                    <FiUser className="font-semibold" /> Author:{" "}
                    <p className="font-light">{user.first_name}</p>
                    <p className="font-light">{user.last_name}</p>
                  </span>
                  <span className="mb-5 flex items-center justify-start gap-1 font-semibold">
                    <FaAudioDescription />
                    Description: <p className="font-light">{description}</p>
                  </span>
                  <span className="mb-5 flex items-center justify-start gap-1 font-semibold">
                    <MdOutlineCreateNewFolder />
                    Created:{" "}
                    <p className="font-light">
                      {dayjs(created_at).format("DD-MM-YYYY")}
                    </p>
                  </span>
                  <span className="mb-5 flex items-center justify-start gap-1 font-semibold">
                    <AiOutlineLike />
                    Likes: <p className="font-light">{likes}</p>
                  </span>
                  <span className="mb-5 flex items-center justify-start gap-1 font-semibold">
                    <SlLocationPin />
                    Location: <p className="font-light">{location.name}</p>
                  </span>
                  <span className="mb-5 flex items-center justify-start gap-1 font-semibold">
                    <FaDownload />
                    Downloads: <p className="font-light">{downloads}</p>
                  </span>
                  <span className="mb-10 flex items-center justify-start gap-1 font-semibold">
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
