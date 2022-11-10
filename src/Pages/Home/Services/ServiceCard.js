import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,img,name,price,description} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div>
        <PhotoProvider>
          <PhotoView src={img}>
          <img src ={img} alt="" className="rounded-3xl w-full h-72"></img></PhotoView>
        </PhotoProvider>
      </div>
      <figure>
        {/* <img src={`/service/${img}`} className="h-72 w-96" alt="" /> */}
        <img src={img} className="h-72 w-96" alt=""/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.length > 100 ?
                            <p>{description.slice(0, 100) + '...'}Read More</p>
                            :
                            <>
                                {description}
                            </>
                        }</p>
        <h4>{price}</h4>
        <div className="card-actions justify-end">
       
          <Link  to ={`/myReview/${_id}`}>
          <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
