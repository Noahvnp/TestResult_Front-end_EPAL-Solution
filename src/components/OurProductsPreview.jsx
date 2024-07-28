import React from "react";
import Heading from "./Services/Heading";
import CategoryCard from "./CategoryCard";

import BoHoa from "../assets/images/product/bohoa.png";
import KeHoa from "../assets/images/product/kehoa.png";
import GioHoa from "../assets/images/product/giohoa.png";
import HoaCuoi from "../assets/images/product/hoacuoi.png";
import HopHoa from "../assets/images/product/hophoa.png";
import BinhHoa from "../assets/images/product/binhhoa.png";
import LanHoDiep from "../assets/images/product/lanhodiep.png";
import LangHoa from "../assets/images/product/langhoa.png";

const ProductsData = [
  {
    id: 1,
    img: BoHoa,
    title: "Bó hoa",
  },
  {
    id: 2,
    img: KeHoa,
    title: "Kệ hoa",
  },
  {
    id: 3,
    img: GioHoa,
    title: "Giỏ hoa",
  },
  {
    id: 4,
    img: HoaCuoi,
    title: "Hoa cưới",
  },
  {
    id: 5,
    img: HopHoa,
    title: "Hộp hoa",
  },
  {
    id: 6,
    img: BinhHoa,
    title: "Bình hoa",
  },
  {
    id: 7,
    img: LanHoDiep,
    title: "Lan hồ điệp",
  },
  {
    id: 8,
    img: LangHoa,
    title: "Lãng hoa",
  },
];

const OurProductsPreview = () => {
  return (
    <div className="mb-14 w-full">
      <div className="container bg-backgroundLighter pt-10">
        <Heading
          title={"Sản phẩm của chúng tôi"}
          subtitle={
            "Với nhiều năm kinh nghiệm phục vụ trong ngành điện hoa, Mộc Flowers chúng tôi luôn cố gắng để tạo ra những sản phẩm tốt nhất, đa dạng nhất phục vụ cho mọi nhu cầu của khách hàng."
          }
        />
        <CategoryCard data={ProductsData} />
      </div>
    </div>
  );
};

export default OurProductsPreview;
