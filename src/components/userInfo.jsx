import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function UserInfo() {
  const { user } = useGlobalContext();

  return (
    <div className="flex items-center justify-center">
      <p className="font-monserat text-sm font-medium">{user.displayName}</p>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="avatar btn btn-circle btn-ghost"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
