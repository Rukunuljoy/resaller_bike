import React from 'react';
import './CarouselItem.css'

const CarouselItem = ({slide}) => {
    const {image,id,prev,next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-1/2">
        <div className="carousel-img w-full">
          <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
          <h1 className="text-6xl font-bold text-white">
            ProActive Guest <br /> service in my <br /> Restaurant
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
          <p className="text-white font-semibold">
            Providing food and drink services to guests in hotels and
            restaurants, showing <br /> attentiveness, and understanding of
            their needs and expectations.
          </p>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
          <button className="btn btn-warning mr-5">service Call</button>
          <button className="btn btn-outline btn-warning">Ending</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default CarouselItem;