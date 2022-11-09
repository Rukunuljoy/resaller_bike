import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id,img,name,price,description,rating} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={`/service/${img}`} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.length > 100 ?
                            <p>{description.slice(0, 100) + '...'}<Link to={`/courses/${_id}`}>Read More</Link> </p>
                            :
                            <>
                                {description}
                            </>
                        }</p>
        <h4>{price}</h4>
        <div className="card-actions justify-end">
          <Link to ={`/myReview/${_id}`}>
          <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
