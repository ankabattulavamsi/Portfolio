import React, { useState } from "react";
import { navItems } from "../constants/NavItemsList";

const Header = () => {
  const [active, setActive] = useState("Home");

  const handleActiveLink = (nav: any) => {
    setActive(nav);
  };
  return (
    <div className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          {"<"}Vamsi{"/>"} <br />
        </h1>
      </div>

      <div className="block lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {navItems?.map((nav: any) => (
            <li className="mr-16">
              <a
                onClick={() => handleActiveLink(nav.title)}
                key={nav.id}
                className={`${
                  nav.title === active
                    ? "inline-block py-2 px-4 text-white no-underline"
                    : "cursor-pointer"
                }`}
                href={nav.path}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
