import React, { useState } from "react";
import { navItems } from "../constants/NavItemsList";

const Header = () => {
  const [active, setActive] = useState("Home");

  const handleActiveLink = (nav: any) => {
    setActive(nav);
  };
  return (
    <div className="flex justify-between py-4 bg-black/40 z-10 fixed w-full px-16 border-b-2 pb-2">
      <div>
        <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          {"<"}Vamsi{"/>"} <br />
        </h1>
      </div>

      <div className="flex justify-between w-6/12 text-white ">
        {navItems?.map((nav: any) => (
          <a
            onClick={() => handleActiveLink(nav.title)}
            key={nav.id}
            className={`${
              nav.title === active
                ? "font-bold cursor-pointer text-pink-600 overflow-y-scroll "
                : "cursor-pointer"
            }`}
            href={nav.path}
          >
            {nav.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
