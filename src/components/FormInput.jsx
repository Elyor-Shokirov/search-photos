import React from "react";

function FormInput({ name, type, placeholder, login, searchbar, icon }) {
  return (
    <>
      {searchbar && (
        <div className="mt-7 md:w-[500px] ">
          <label
            htmlFor="search-bar"
            className="relative bg-white  min-w-sm max-w-2xl flex flex-row md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">
            <input
              type={type}
              id="search-bar"
              name={name}
              placeholder={placeholder}
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            />

            <button
              className="bg-brandColor h-[38px] rounded-lg w-[100px] text-white text-sm font-semibold whitespace-nowrap truncate mx-auto"
              type="submit">
              Search
            </button>
          </label>
        </div>
      )}

      {login && (
        <>
          <label className="input input-bordered flex items-center gap-2 w-full">
            {icon}

            <input
              type={type}
              className="grow"
              placeholder={placeholder}
              name={name}
            />
          </label>
        </>
      )}
    </>
  );
}

export default FormInput;
