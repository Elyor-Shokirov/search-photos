import { useEffect, useState } from "react";
import { FaDownload, FaHeart } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { PiUserCircleCheckFill } from "react-icons/pi";
import { RiContactsBookFill, RiHomeSmileFill, RiSunLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Badge from "./badge";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};
function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const toggaleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className="py-5 shadow-xl">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="max-w-[1440px] m-auto">
        <div className="navbar">
          <div className="navbar-start">
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost drawer-button lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <Link className="btn btn-ghost text-xl" to="/">
              <img src="/img/logo.png" alt="LOGO" className="w-14" />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link className="font-medium font-monserat" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-medium font-monserat" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="font-medium font-monserat" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-7">
            <Link to="/downloadImages" className="font-medium relative">
              <FaDownload className="text-2xl" />
              <div className="absolute right-[-17px] top-[-11px]">
                <Badge down />
              </div>
            </Link>

            <Link className="font-medium relative" to="/likedimages">
              <FaHeart className="font-monserat text-2xl" />
              <div className="absolute right-[-16px] top-[-11px]">
                <Badge />
              </div>
            </Link>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onClick={toggaleTheme} />

              {/* sun icon */}
              <RiSunLine className="swap-on text-2xl  fill-current" />

              {/* moon icon */}
              <IoMdMoon className="swap-off text-2xl fill-current" />
            </label>
          </div>
        </div>
      </div>

      {/* Drawer Menu - Embedded within the Navbar */}
      <div className="drawer-side z-[100] ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-200 text-base-content h-svh flex  justify-center ">
          <li>
            <Link className="font-medium text-2xl font-monserat" to="/">
              <span>
                <RiHomeSmileFill />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link className="font-medium text-2xl font-monserat" to="/about">
              <span>
                <PiUserCircleCheckFill />
              </span>
              About
            </Link>
          </li>
          <li>
            <Link className="font-medium text-2xl font-monserat" to="/contact">
              <span>
                <RiContactsBookFill />
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
