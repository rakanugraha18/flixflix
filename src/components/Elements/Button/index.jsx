import React from "react";

const Button = (props) => {
  const { type, children, classname = "bg-orange-500" } = props;
  return (
    <button
      type={type}
      className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
