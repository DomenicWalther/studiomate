import React from "react";
import Searchbar from "./Searchbar";
import Avatar from "./Users/Avatar";

const Navbar: React.FC = () => {
  return (
    <div className="flex h-20 items-center justify-between bg-white p-8 font-sans">
      <div>Logo</div>
      <h2 className="text-3xl font-bold text-supporting-lblue-900">
        Good morning, <span className="text-primary-purple-600">Domenic!</span>
      </h2>
      <Searchbar />
      <div className="flex gap-5">
        <div className="flex items-center gap-5">
          <p>Calendar</p>
          <p>Messages</p>
          <p>Notifications</p>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
