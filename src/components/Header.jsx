import React, { useState } from "react";
import { HiHome, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

// import profile from "./../assets/bony.png";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      path: "/",
    },
    {
      name: "POPULAR",
      icon: HiStar,
      path: "/Popular",
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
      <div className="fixed bg-slate-100 w-full">
        {/* Header */}
        <div className="flex items-center justify-between py-2">
          <div className="w-[80px] md:w-[115px] object-cover">
            <a href="/">
              <h1 className="font-bold text-3xl px-7">flixflix</h1>
            </a>
          </div>

          <div className="flex gap-8 items-center pr-4 md:pr-10">
            <div className="hidden md:flex gap-8 mt-4">
              {menu.map((item, index) => (
                <Link to={item.path}>
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                </Link>
              ))}
            </div>
            <div className="flex md:hidden gap-6 mt-2 pr-0">
              {menu.map(
                (item, index) =>
                  index < 0 && <HeaderItem name={" "} Icon={item.icon} />
              )}
            </div>
            <div className="md:hidden mt-2" onClick={() => setToggle(!toggle)}>
              <HeaderItem name={" "} Icon={FaIcons.FaBars} />
              {toggle ? (
                <div className="absolute right-7 mt-4 border-[1px] bg-white border-gray-700 p-3 py-2">
                  {menu.map(
                    (item, index) =>
                      index > 0 && (
                        <HeaderItem name={item.name} Icon={item.icon} />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
          {/* <img src={profile} className="w-[40px] h-auto rounded-full" /> */}
        </div>
        {/* Header end */}
      </div>
    </>
  );
}

export default Header;
