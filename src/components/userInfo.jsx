import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../fireBase/firebaseConfig";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Badge from "./badge";

function UserInfo() {
  const { user, dispatch } = useGlobalContext();
  const signOutUser = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOG_OUT" });
      toast.success("See you soon");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <p className="font-monserat text-sm font-medium">
        {user.displayName && user.displayName}
      </p>
      <div className="dropdown dropdown-end relative">
        <div
          tabIndex={0}
          role="button"
          className="avatar btn btn-circle btn-ghost"
        >
          <div className="w-10 rounded-full">
            {user.photoURL && (
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            )}
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[95] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <Link to="/profile">
              <button className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </button>
            </Link>
          </li>
          <li className="md:hidden">
            <Link to="/likedimages">
              Liked Images <Badge />
            </Link>
          </li>
          <li className="md:hidden">
            <Link to="/downloadImages">
              Download Images <Badge down />
            </Link>
          </li>
          <li>
            <button onClick={signOutUser}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
