
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyReview = () => {
  const { _id,description,name, price,img } = useLoaderData();
  
  const {user} = useContext(AuthContext)

  const handleReview =event =>{
    event.preventDefault();
    const form =event.target;
    const name = `${form.Name.value}}`;
    const email = user?.email || 'not allow'
    const phone = form.phone.value;
    const message =form.message.value;

    const review = {
        service: _id,
        serviceName:name,
        price,
        customer:name,
        email: email,
        phone: phone,
        message: message
    }

    fetch('http://localhost:5000/reviews',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledge){
            alert('review successfully')
            form.reset();
        }
    })
    .catch(err=>console.log(err))

  }

  return (
    <div className="grid grid-cols-2">
      <form onSubmit={handleReview} className="mx-10 my-10">
        
        
        <img src={img} alt="" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
       
        </div>
        <div className="card w-96 bg-base-100 mb-2 shadow-xl">
         <div className="card-body mb-5">
         <h2 className="text-3xl">{name}</h2>
         <input
            type="text"
            name="Name"
            placeholder="Enter your Name"
            className="input input-ghost w-full input-bordered mb-2"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Your phone"
            className="input input-ghost w-full input-bordered mb-2"
            required
          />
          <input
            type="email"
            placeholder="your email"
            name="email"
            className="input input-ghost w-full input-bordered mb-2"
            defaultValue={user?.email}
            readOnly
          />
          <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Your FeedBack" required></textarea>
        <input className="btn btn-info" type ="submit" value = "please your order"/>
        
      </div>
    </div>
        
      </form>
      <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>{price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default MyReview;
