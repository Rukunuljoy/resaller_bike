import React from "react";
import img1 from "../../../asset/banner/img1.jpg";
import img2 from "../../../asset/banner/img2.jpg";
import img3 from "../../../asset/banner/img3.jpg";
import img4 from "../../../asset/banner/img4.jpg";
import img5 from "../../../asset/banner/img5.jpg";

import CarouselItem from "./CarouselItem";

const bannerData = [
    {
        image:img1,
        prev:5,
        id:1,
        next:2
    },
    {
        image:img2,
        prev:1,
        id:2,
        next:3
    },
    {
        image:img3,
        prev:2,
        id:3,
        next:4
    },
    {
        image:img4,
        prev:3,
        id:4,
        next:5
    },
    {
        image:img5,
        prev:4,
        id:5,
        next:1
    },

]
    

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
        {
            bannerData.map(slide =><CarouselItem 
                key={slide.id}
                slide={slide}
            ></CarouselItem> )
            
        }
    </div>
  )
};

export default Banner;
