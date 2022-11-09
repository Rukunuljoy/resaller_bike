import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyReview = () => {
  const { name } = useLoaderData();
  const {user} = useContext(AuthContext)
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="input input-ghost w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="input input-ghost w-full "
          />
          <input
            type="text"
            placeholder="Your phone"
            className="input input-ghost w-full "
          />
          <input
            type="text"
            placeholder="your email"
            className="input input-ghost w-full "
            defaultValue={user?.email}
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default MyReview;
