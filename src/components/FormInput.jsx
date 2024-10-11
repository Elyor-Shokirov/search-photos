import React from "react";

function FormInput({
  name,
  type,
  placeholder,
  login,
  searchbar,
  icon,
  value,
  defaultValue,
}) {
  return (
    <>
      {searchbar && (
        <div className="mt-7 md:w-[500px]">
          <label
            htmlFor="search-bar"
            className="min-w-sm focus-within:none relative z-[90] flex max-w-2xl flex-row items-center justify-center gap-2 rounded-2xl border px-2 py-2 shadow-2xl md:flex-row"
          >
            <input
              type={type}
              id="search-bar"
              name={name}
              placeholder={placeholder}
              className="input w-full flex-1 rounded-md px-6 py-2 outline-none focus-within:border-white"
            />

            <button
              className="mx-auto h-[38px] w-[100px] truncate whitespace-nowrap rounded-lg bg-brandColor text-sm font-semibold text-white"
              type="submit"
            >
              Search
            </button>
          </label>
        </div>
      )}

      {login && (
        <>
          <label className="input input-bordered flex w-full items-center gap-2">
            {icon}

            <input
              type={type}
              className="grow"
              placeholder={placeholder}
              name={name}
              value={value}
              defaultValue={defaultValue}
            />
          </label>
        </>
      )}
    </>
  );
}

export default FormInput;
