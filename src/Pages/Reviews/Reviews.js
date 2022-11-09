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

  const handleDelete = id =>{
    const ignored =window.confirm('are you sure you want to delete');
    if(ignored){
        fetch( `http://localhost:5000/reviews/${id}`,{
            method: 'DELETE',
           
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = addReviews.filter(review => review._id !==id)
                    setAddReviews(remaining)
                }
            })
    }
}

const handleUpdate = id =>{
    fetch(`http://localhost:5000/reviews/${id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({status: 'Approved'})
    })
    .then(res=> res.json())
    .then(data => {

        console.log(data)
        if(data.modifiedCount > 0 ){
            const remaining = addReviews.filter(rev => rev._id !==id)
            const approving = addReviews.find(rev => rev._id === id)
            approving.status = 'Approved'
            // setAddReviews(remaining)

            const newReviews = [approving, ...remaining]
            setAddReviews(newReviews)
        }
    })
}

  return (
    <div className="grid">
      <h2 className="text-5xl">you have:{addReviews.length} reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ml-20 mt-20 mb-10">
        {addReviews.map((addReview) => (
          <ReviewsRow 
          key={addReview._id} 
          addReview={addReview}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          ></ReviewsRow>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
