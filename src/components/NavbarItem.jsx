import React from "react";

function NavbarItem({ name, Icon }) {
  return (
    <div className="flex items-center gap-3 text-[18px] font-semibold cursor-pointer  hover:duration-300 hover:underline underline-offset-8 mb-3 ">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default NavbarItem;
