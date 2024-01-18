import React from "react";
const Profile = () => {
  return (
    <div className="flex items-center mx-auto py-20">
      <img
        src="https://placekitten.com/200/200" // Ganti dengan URL foto profil Anda
        alt="Profile"
        className="rounded-full w-20 h-20 mr-4"
      />
      <div>
        <h2 className="text-2xl font-bold">Username</h2>
        <p className="text-lg font-medium">Fullname</p>
        <p className="text-gray-600">email@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
