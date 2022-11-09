
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyReview = () => {
  const { _id,name, price,img } = useLoaderData();
  const {user} = useContext(AuthContext)

  const handleReview =event =>{
    event.preventDefault();
    const form =event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
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

    // if(phone.length > 10){
    //     alert('phone number must be 10 characters long')
    // }
    // else{

    // }

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
    <div>
      <form onSubmit={handleReview} className="mx-10 my-10">
        <h2 className="text-3xl">{name}</h2>
        <h3 className="text-2xl">price:{price}</h3>
        <img src={img} alt="" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Your phone"
            className="input input-ghost w-full input-bordered"
            required
          />
          <input
            type="email"
            placeholder="your email"
            name="email"
            className="input input-ghost w-full input-bordered"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Your FeedBack" required></textarea>
        <input className="btn btn-info" type ="submit" value = "please your order"/>
      </form>
    </div>
  );
};

export default MyReview;
