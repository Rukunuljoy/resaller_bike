import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyReview = () => {
  const { name, price,img } = useLoaderData();
  const {user} = useContext(AuthContext)
  return (
    <div>
      <form className="mx-10 my-10">
        <h2 className="text-3xl">{name}</h2>
        <h3 className="text-2xl">price:{price}</h3>
        <img src={img} alt="" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="first name"
            placeholder="First name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="last name"
            placeholder="Last name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            name="email"
            placeholder="Your phone"
            className="input input-ghost w-full input-bordered"
          />
          <input
            type="text"
            placeholder="your email"
            name="password"
            className="input input-ghost w-full input-bordered"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Your FeedBack"></textarea>
        <input className="btn btn-info" type ="submit" value = "please your order"/>
      </form>
    </div>
  );
};

export default MyReview;
