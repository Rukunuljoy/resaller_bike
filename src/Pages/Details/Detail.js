import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detail = () => {
    const allDetails = useLoaderData()
    const { _id,name, price,img } = allDetails;
    console.log(allDetails)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"></h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Detail;