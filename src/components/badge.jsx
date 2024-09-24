import React from "react";

import { useGlobalContext } from "../hooks/useGlobalContext";

function Badge() {
  const { likedImages } = useGlobalContext();
  console.log("liked IMages", likedImages);

  return (
    <div className="w-6 h-6 bg-red-600 flex items-center justify-center rounded-full">
      <div className="text-white font-bold text-xs">
        <p>{likedImages.length}</p>
      </div>
    </div>
  );
}

export default Badge;
