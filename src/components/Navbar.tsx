import React from "react";
import Searchbar from "./Searchbar";
import Avatar from "./Users/Avatar";
import Image from "next/image";
import { IconContext } from "react-icons";

import { IoNotificationsOutline, IoCalendarOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";

interface userValues {
  userName: string;
  avatarPath: string;
}

const Navbar: React.FC<userValues> = ({ userName, avatarPath }: userValues) => {
  const iconSize = 25;
  return (
    <div className="flex h-20 items-center justify-between bg-white p-8 pr-10 font-sans lg:pr-44">
      <div className="logo flex items-center gap-4 text-neutral-800">
        <Image
          src="/svg/studiomate_logo.svg"
          alt="Logo"
          width={50}
          height={50}
        />
        <h3 className="text-base">STUDIOMATE</h3>
      </div>
      <h2 className="text-3xl font-bold text-supporting-lblue-900">
        Good morning,{" "}
        <span className="primar text-primary-purple-600 ">{userName}</span>
      </h2>

      <Searchbar />
      <div className="flex gap-5">
        <div className="flex items-center gap-5">
          <IconContext.Provider
            value={{
              className: "fill-primary-purple-600 stroke-primary-purple-600",
            }}
          >
            <IoCalendarOutline size={iconSize} />
            <BiMessageDetail size={iconSize} />
            <IoNotificationsOutline size={iconSize} />
          </IconContext.Provider>
        </div>
        <Avatar avatarPath={avatarPath} />
      </div>
    </div>
  );
};

export default Navbar;
