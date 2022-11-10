import React from "react";
import veg1 from "../../../asset/special food/veg1.jpg";
import veg2 from "../../../asset/special food/veg2.jpg";
import veg3 from "../../../asset/special food/veg3.webp";

const SpecialDish = () => {
  return (
    <div className="mt-10">
        <div className="text-center">
            <h2 className="text-5xl font-bold text-center mb-5">My Special Dish</h2>
            <p className="text-xl font-semibold">A specialty food is a food that is typically considered as a "unique and high-value food <br/> item made in small quantities from high-quality ingredients</p>
        </div>
    <div className="container">
      <div className="row grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mb-10 "> 
      <div className="card w-96 bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={veg1} alt="" className="rounded-xl w-72 h-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Chicken veg mix</h2>
        <p>Food taste better when you eat it with your family and friend</p>
        <div className="card-actions">
            <p className="text-2xl font-bold">$12</p>
          <button className="btn btn-sm btn-warning">Add to cart</button>
        </div>
      </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={veg2} alt="" className="rounded-xl w-72 h-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">veg mixer</h2>
        <p>Food taste better when you eat it with your family and friend</p>
        <div className="card-actions">
        <p className="text-2xl font-bold">$12</p>
          <button className="btn btn-sm btn-warning">Add to cart</button>
        </div>
      </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={veg3} alt="" className="rounded-xl w-72 h-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">indian veg mixer</h2>
        <p>Food taste better when you eat it with your family and friend</p>
        <div className="card-actions">
        <p className="text-2xl font-bold">$12</p>
          <button className="btn btn-sm btn-warning">Add to cart</button>
        </div>
      </div>
    </div>
   </div>
   </div>
   </div>
  );
};

export default SpecialDish;
