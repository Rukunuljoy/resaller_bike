import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,img,name,price,description} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={`/service/${img}`} className="h-72 w-96" alt="" />
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
        {/* to ={`/myReview/${_id}`} */}
          <Link to={`//addServices/${_id}`}>
          <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
