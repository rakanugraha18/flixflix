import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full h-16 bg-slate-500 mt-10">
        <div className="flex w-full justify-left text-center gap-5 lg:min-w-fit lg:w-max md:px-5 items-center border-t-2 border-black ">
          <p className="text-black">
            Copyright © 2023 Flixflix. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
