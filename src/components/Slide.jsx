import React from "react";
import Slider from "react-slick";

import Slide1 from "../assets/images/slide/slide.png";
import Slide2 from "../assets/images/slide/slide2.png";
import Slide3 from "../assets/images/slide/slide3.png";

const SlideData = [
  {
    id: 1,
    img: Slide1,
    title: "Trao gửi yêu thương",
    subtitle:
      "Điệu hoa quốc tế & toàn quốc. Mộc Flowers giao hoa miễn phí trong vòng 2h.",
  },
  {
    id: 2,
    img: Slide2,
    title: "Trao gửi yêu thương",
    subtitle:
      "Điệu hoa quốc tế & toàn quốc. Mộc Flowers giao hoa miễn phí trong vòng 2h.",
  },
  {
    id: 3,
    img: Slide3,
    title: "Trao gửi yêu thương",
    subtitle:
      "Điệu hoa quốc tế & toàn quốc. Mộc Flowers giao hoa miễn phí trong vòng 2h.",
  },
];

const Slide = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {SlideData.map((data) => (
          <div key={data.id}>
            <div className="absolute z-10 pl-20 pt-40">
              <h3 className="mb-6 text-5xl font-bold text-inkTeal">
                {data.title}
              </h3>
              <p className="text-inkLight">{data.subtitle}</p>
            </div>

            <div className="z-10">
              <img
                src={data.img}
                alt={data.title}
                className="z-100 relative h-[440px] w-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
