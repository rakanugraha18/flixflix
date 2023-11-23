import React, { useState } from "react";
import { HiHome, HiPlayCircle, HiTv } from "react-icons/hi2";
import NavbarItem from "./NavbarItem";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

// import profile from "./../assets/bony.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      path: "/",
    },
    {
      name: "NOW PLAYING",
      icon: FaIcons.FaRegPlayCircle,
      path: "/NowPlaying",
    },
    {
      name: "MOVIES TOP RATE",
      icon: HiPlayCircle,
      path: "/MovieTopRatePage",
    },
    {
      name: "SERIES",
      icon: HiTv,
      path: "/Series",
    },
  ];
  return (
    <>
      <nav className="fixed bg-orange-600 w-full">
        {/* Header */}
        <div className="flex items-center justify-between py-2">
          <div className="w-[80px] md:w-[115px] object-cover">
            <a href="/">
              <h1 className="font-bold text-3xl px-7 text-white">flixflix</h1>
            </a>
          </div>

          <div className="flex gap-8 items-center pr-4 md:pr-10 text-white">
            <div className="hidden md:flex gap-8 mt-4">
              {menu.map((item, index) => (
                <Link key={index} to={item.path}>
                  <NavbarItem name={item.name} Icon={item.icon} />
                </Link>
              ))}
            </div>
            <div className="flex md:hidden gap-6 mt-2 pr-0">
              {menu.map(
                (item, index) =>
                  index < 1 && (
                    <Link key={index} to={item.path}>
                      <NavbarItem key={index} name={" "} Icon={item.icon} />
                    </Link>
                  )
              )}
            </div>
            <div className="md:hidden mt-2" onClick={() => setToggle(!toggle)}>
              <NavbarItem name={" "} Icon={FaIcons.FaBars} />
              {toggle ? (
                <div className="absolute right-7 mt-4 border-[1px] bg-orange-600 border-gray-700 p-3 py-2">
                  {menu.map(
                    (item, index) =>
                      index > 0 && (
                        <Link key={index} to={item.path}>
                          <NavbarItem name={item.name} Icon={item.icon} />
                        </Link>
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
          {/* <img src={profile} className="w-[40px] h-auto rounded-full" /> */}
        </div>
        {/* Header end */}
      </nav>
    </>
  );
};

export default Navbar;
