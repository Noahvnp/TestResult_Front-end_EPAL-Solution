import React from "react";

import { FaFacebookF, FaInstagram, FaUserAlt } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="border-b border-secondary bg-secondary">
      <div className="h-48px container flex items-center justify-between py-2 text-inkLighter">
        <div className="flex items-center justify-center gap-2">
          <FaFacebookF size={20} />
          <div className="h-5 w-[1px] bg-inkLighter"></div>
          <FaInstagram size={20} />
        </div>

        <div className="flex items-center justify-center gap-3 text-[14px]">
          <a href="">Blog</a>
          <div className="h-[20px] w-[1px] bg-inkLighter"></div>
          <a href="">Giới thiệu</a>
          <div className="h-[20px] w-[0.5px] bg-inkLighter"></div>
          <a href="" className="flex items-center justify-center gap-2">
            <FaUserAlt size={16} />
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
