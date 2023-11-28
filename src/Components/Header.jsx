import React from "react";
import logo from "../assets/Disney+_logo.svg.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
  ];
  return (
    <div className="flex items-center  justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img src="https://cdn.pixabay.com/photo/2017/06/09/23/22/avatar-2388584_1280.png" className="w-[80px] rounded-full"/>
    </div>
  );
};

export default Header;
