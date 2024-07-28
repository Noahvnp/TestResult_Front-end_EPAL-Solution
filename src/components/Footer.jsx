import React from "react";
import { FaFacebookF, FaInstagram, FaGooglePlusG } from "react-icons/fa";

import Logo from "../assets/images/logo/logo_trang.png";
import Tag from "../assets/images/tag/tag1.png";
import Tag2 from "../assets/icons/Icons-Background.png";
import Tag3 from "../assets/icons/message-reply-text.png";
import Tag4 from "../assets/icons/order_list_24px.png";
import Tag5 from "../assets/icons/survey_24px.png";

const Footer = () => {
  return (
    <div className="bg-backgroundFooter">
      <div className="h-14 bg-primaryTeal">
        <div className="container">
          <div className="flex cursor-pointer items-center justify-center gap-4 pt-4 text-sm text-inkLighter">
            <p className="flex items-center gap-2">
              {" "}
              <img src={Tag4} alt="tag4" /> Hướng dẫn đặt hàng, thanh toán
            </p>
            <div className="h-5 w-[1px] bg-inkLighter"></div>
            <p className="flex items-center gap-2">
              <img src={Tag2} alt="tag2" />
              Quy định đổi trả, hoàn tiền
            </p>
            <div className="h-5 w-[1px] bg-inkLighter"></div>
            <p className="flex items-center gap-2">
              <img src={Tag3} alt="tag3" />
              Câu hỏi thường gặp
            </p>
            <div className="h-5 w-[1px] bg-inkLighter"></div>
            <p className="flex items-center gap-2">
              <img src={Tag5} alt="tag5" />
              Dịch vụ khác
            </p>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center px-28 py-16 text-primaryGray">
        <div className="grid grid-cols-4 gap-28 text-sm">
          <div className="flex flex-col justify-start gap-6">
            <img src={Logo} alt="Logo" className="h-[40px]" />
            <p>
              Mộc Flowers luôn cam kết đặt chất lượng hoa luôn tươi mới lên hàng
              đầu giao cho khách hàng.
            </p>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <h3 className="text-base font-bold">Thông tin shop</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2">
                <p>Điện thoại</p>
                <p className="font-bold">+84 356 435 789</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Email</p>
                <p className="font-bold">mocflowers@gmail.com</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Website</p>
                <p className="font-bold">mocflowers.com</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Giờ mở cửa</p>
                <p className="font-bold">7:00AM - 8:00PM</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-4 [&>*]:cursor-pointer">
            <h3 className="text-base font-bold">Sản phẩm</h3>
            <p>Lan hồ điệp</p>
            <p>Hoa chủ đề theo các mùa</p>
            <p>Hoa sinh nhật</p>
            <p>Hoa chúc mừng</p>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <h3 className="text-base font-bold">Theo dõi chúng tôi</h3>
            <div className="flex gap-6 [&>*]:cursor-pointer">
              <FaFacebookF
                size={30}
                className="rounded-full border border-white p-1"
              />
              <FaInstagram
                size={30}
                className="rounded-full border border-white p-1"
              />
              <FaGooglePlusG
                size={30}
                className="rounded-full border border-white p-1"
              />
            </div>
            <img src={Tag} alt="tag" className="w-3/4" />
          </div>
        </div>
      </div>
      <div className="h-9 bg-[#3B4556]">
        <div className="container">
          <div className="flex items-center justify-between pt-2 text-sm text-inkLighter">
            <p>Copyright ©2021, mocflowers.com, All rights reserved</p>
            <p>Thiết kế Website bởi Epal Solution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
