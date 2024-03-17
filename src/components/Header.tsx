import React, { useState } from "react";
import { navItems } from "../constants/NavItemsList";

const Header = () => {
  const [active, setActive] = useState("Home");

  const handleActiveLink = (nav: any) => {
    setActive(nav);
  };
  return (
    <div className="flex justify-between py-2 px-10">
      <div>
        <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          {"<"}Vamsi{"/>"} <br />
        </h1>
      </div>

      <div className="flex justify-between w-6/12 text-white">
        {navItems?.map((nav: any) => (
          <a
            onClick={() => handleActiveLink(nav.path)}
            key={nav.id}
            className={`${
              active ? "font-semibold cursor-pointer" : "cursor-pointer"
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
