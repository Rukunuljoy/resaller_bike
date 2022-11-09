import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {
    const {user} =useContext(AuthContext)
    const [reviews,setReviews] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
           .then(res => res.json())
           .then(data=>setReviews(data))
    },[user?.email])

    return (
        <div>
            <h2 className='text-5xl'>you have:{reviews.length} reviews</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        reviews.map(review =><ReviewsRow
        key={review._id}
        review={review}
        ></ReviewsRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Reviews;