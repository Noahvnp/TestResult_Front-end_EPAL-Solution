import React from "react";
import Slider from "react-slick";

import Heading from "./Services/Heading";

import Img1 from "../assets/images/slide/slide.png";
import Img2 from "../assets/images/slide/slide2.png";
import Img3 from "../assets/images/slide/slide3.png";
import Img4 from "../assets/images/slide/slide4.png";
import Img5 from "../assets/images/slide/slide5.png";

const About = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-inkLighter">
      <div className="containter pb-4 pt-10">
        <Heading title={"Khách hàng nói gì về chúng tôi"} />
        <div className="container">
          <Slider {...settings}>
            <div>
              <img
                src={Img5}
                className="h-[245px] w-[368px] rounded-md object-cover"
              />
            </div>
            <div>
              <img
                src={Img1}
                className="h-[245px] w-[368px] rounded-md object-cover"
              />
            </div>
            <div>
              <img
                src={Img2}
                className="h-[245px] w-[368px] rounded-md object-cover"
              />
            </div>
            <div>
              <img
                src={Img3}
                className="h-[245px] w-[368px] rounded-md object-cover"
              />
            </div>
            <div>
              <img
                src={Img4}
                className="h-[245px] w-[368px] rounded-md object-cover"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
