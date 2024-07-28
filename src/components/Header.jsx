import React from "react";

import TopHeader from "./TopHeader";
import Navbar from "./Navbar";

import Logo from "../assets/images/logo/logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";
const Header = () => {
  return (
    <div className="w-full">
      <div className="bg-inkLighter">
        <TopHeader />
        <div className="border-b">
          <div className="container flex items-center justify-between py-4">
            <img src={Logo} alt="logo" className="" />
            <div className="flex items-center justify-between gap-4">
              <div className="group relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  className="w-[315px] rounded-full border px-6 py-2 text-sm"
                />
                <IoMdSearch
                  color="#172B4D"
                  size={24}
                  className="group-hover:text-primary absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              </div>
              <button className="relative p-1">
                <IoBagHandleSharp color="#D3D7DE" size={24} />
                <div className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-1 text-[10px] text-white">
                  2
                </div>
              </button>
            </div>
          </div>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Header;
