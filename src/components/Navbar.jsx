import React from "react";

import Ting from "../assets/images/tag/ting.png";

const MenuLinks = [
  {
    id: 1,
    title: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    title: "Lan hồ điệp",
    link: "/#lan-ho-diep",
  },
  {
    id: 3,
    title: "Chủ đề theo mùa",
    link: "/#chu-de-theo-mua",
  },
  {
    id: 4,
    title: "Sinh nhật",
    link: "/#sinh-nhat",
  },
  {
    id: 4,
    title: "Chúc mừng",
    link: "/#chuc-mung",
  },
  {
    id: 4,
    title: "Chia buồn",
    link: "/#chia-buon",
  },
  {
    id: 4,
    title: "KHUYẾN MÃI",
    link: "/#khuyen-mai",
    icAfter: Ting,
  },
];

const Navbar = () => {
  return (
    <div className="w-full border-b">
      <ul className="container flex items-center gap-14 py-4">
        {MenuLinks?.map((data, index) => (
          <li key={index}>
            <a
              href={data.link}
              className={`${data.link === "/" && "border-b-[3px] border-inkTeal"} hover:text-inkLight flex items-center gap-2 py-2 font-bold text-ink duration-200`}
            >
              {data.icAfter && <img src={data.icAfter} alt={data.title} />}
              {data.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
