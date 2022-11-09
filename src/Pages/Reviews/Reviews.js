import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ReviewsRow from "./ReviewsRow";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [addReviews, setAddReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAddReviews(data);
      });
  }, [user?.email]);

  return (
    <div className="grid">
      <h2 className="text-5xl">you have:{addReviews.length} reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ml-20 mt-20 mb-10">
        {addReviews.map((addReview) => (
          <ReviewsRow key={addReview._id} addReview={addReview}></ReviewsRow>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
