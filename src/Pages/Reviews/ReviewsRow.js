import React, { useEffect, useState } from "react";
import Services from "../Home/Services/Services";

const ReviewsRow = ({addReview, handleDelete,handleUpdate}) => {
    const {_id,serviceName,price,email,phone,service,status} = addReview;
    const [foodService,setFoodService] = useState({})
    useEffect(()=>{
        fetch( `http://localhost:5000/services/${service}`)
        .then(res => res.json())
           .then(data =>setFoodService(data))
    },[service])

   

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    {
        foodService?.img && 
        <img src={foodService.img} alt="" />}
  </div>
</div>
  <div className="card-body items-center text-center font-semibold text-2xl">
    <h2 className="card-title"><u className="text-orange-600 text-3xl">Food Orders</u></h2>
    <p>name: {serviceName}</p>
    <p>price: {price}</p>
    <p>phone: {phone}</p>
    <p>email: {email}</p>
    <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <button 
    onClick={()=>handleUpdate(_id)}
    className="btn btn-sm">{status ? status :  'pending'}</button>
  </div>
</div>
  );
};

export default ReviewsRow;
