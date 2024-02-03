import React from "react";
import Label from "../Elements/Input/Label";

const AuthLayout = (props) => {
  const { children, tittle } = props;
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-screen flex justify-center items-center w-100">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Label classname="text-xl font-medium text-gray-900 dark:text-white mb-4">
          {tittle}
        </Label>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
