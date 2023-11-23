import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="w-full h-[300] bg-[#121212] py-24 mt-5">
        <div>
          <h1 className="font-bold text-[70px] px-7 text-white text-center">
            flixflix
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4 pb-10 text-white text-[30px]">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaGithub />
        </div>
        <div className="flex w-full justify-left text-center gap-5 lg:min-w-fit lg:w-max md:px-5 items-center border-t-2 mx-auto">
          <p className="text-white">
            Copyright © 2021 Flixflix® LLC. Patented and Patents pending.
            Flixflix® is a registered trademark of Flixflix® LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
