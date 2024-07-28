import React from "react";
import Slider from "react-slick";

import Heading from "./Services/Heading";

import Background from "../assets/images/slide/slide4.png";
import UyTin from "../assets/images/tag/tag2.png";
import ChungNhan from "../assets/images/tag/tag3.png";
import ChatLuong from "../assets/images/tag/tag4.png";

const ReasonsData = [
  {
    id: 1,
    title: "Chứng nhận sản phẩm",
    description:
      "Sảm phẩm của chúng tôi tự hào được chứng nhận chất. Với các loại hoa hoa dạng được nhập khẩu đảm bảo chất lượng sản phẩm.",
    icon: UyTin,
  },
  {
    id: 2,
    title: "Uy tín hàng đầu",
    description:
      "Với nhiều năm kinh nghiệm phục vụ trong ngành điện hoa, Mộc Flowers hiểu mức độ quan trọng trong công việc của mình là truyền tải đúng và đủ thông điệp của người tặng đến người nhận. Vì thế chúng tôi cam kết 100% sự hài lòng của khách hàng với dịch vụ điện hoa của chúng tôi.",
    icon: ChungNhan,
  },
  {
    id: 3,
    title: "Chất lượng tuyệt vời",
    description:
      "Luôn cam kết đặt chất lượng hoa luôn tươi mới lên hàng đầu giao cho khách. Các mẫu hoa luôn được cắm đủ số lượng và giống kiểu dáng đã đặt.",
    icon: ChatLuong,
  },
];

const Reasons = () => {
  const settings = {
    centerMode: false,
    dots: true,
    arrows: false,
    infinite: false,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="relative h-[544px]">
      <div className="">
        <img
          src={Background}
          alt="bg"
          className="absolute h-[544px] w-full object-cover opacity-30"
        />
      </div>
      <div className="absolute h-[544px] w-full pt-8">
        <div className="container">
          <Heading title={"Lý do bạn nên chọn Mộc Flowers"} />
          <Slider {...settings}>
            {ReasonsData.map((data) => (
              <div key={data.id} className="reason-container">
                <div className="flex flex-col items-center justify-center gap-6 rounded-md bg-inkLighter px-4 py-6 text-center drop-shadow-lg">
                  <img src={data.icon} alt={data.title} />
                  <h3 className="text-lg font-bold text-inkTeal">
                    {data.title}
                  </h3>
                  <p className="text-inkLight">{data.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
