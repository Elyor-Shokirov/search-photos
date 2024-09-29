import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Badge({ down }) {
  const { likedImages, downloadImages } = useGlobalContext();

  return (
    <div className="">
      {down ? (
        <div className="badge badge-secondary">{downloadImages.length}</div>
      ) : (
        <div className="badge badge-secondary">{likedImages.length}</div>
      )}
    </div>
  );
}

export default Badge;
