import { RiHeartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Badge from "./badge";

function Navbar() {
  const { colors } = useGlobalContext();

  console.log(colors);

  return (
    <header className={` py-5 focus-within:border-gray-300 shadow-xl`}>
      <div className="max-w-[1440px] m-auto flex justify-between items-center font-bold">
        <Link className="text-3xl" to="/">
          <img src="/img/logo.png" alt="LOGO" className="w-14 " />
        </Link>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link className="font-medium" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-medium" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="font-medium" to="/contact">
                Contact
              </Link>
            </li>
            <li className="relative">
              <Link className="font-medium" to="/likedimages">
                <div className="absolute  right-[-16px] top-[-11px]">
                  <Badge />
                </div>
                <RiHeartLine className="text-2xl text-brandColor" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
