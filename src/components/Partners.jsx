import React from "react";
import Slider from "react-slick";

import Heading from "./Services/Heading";

import Img1 from "../assets/images/partners/company1.png";
import Img2 from "../assets/images/partners/company2.png";
import Img3 from "../assets/images/partners/company3.png";
import Img4 from "../assets/images/partners/company4.png";

const Partners = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-inkLighter">
      <div className="containter pb-4 pt-10">
        <Heading title={"Đối tác của chúng tôi"} />
        <div className="container">
          <Slider {...settings}>
            <div>
              <img
                src={Img1}
                className="h-[134px] w-[268px] overflow-hidden rounded-md object-contain p-2 hover:shadow-lg"
              />
            </div>
            <div>
              <img
                src={Img2}
                className="h-[134px] w-[268px] overflow-hidden rounded-md object-contain p-2 hover:shadow-lg"
              />
            </div>
            <div>
              <img
                src={Img3}
                className="h-[134px] w-[268px] overflow-hidden rounded-md object-contain p-2 hover:shadow-lg"
              />
            </div>
            <div>
              <img
                src={Img4}
                className="h-[134px] w-[268px] overflow-hidden rounded-md object-contain p-2 hover:shadow-lg"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
