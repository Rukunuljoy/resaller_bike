import React from "react";
import service1 from '../../../asset/about us/service1.webp'
import service2 from '../../../asset/about us/service2.webp'

const About = () => {
  return (
    <div className="hero my-20 rounded-lg min-h-screen p-7 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative w-1/2">
            <img src={service1} alt="" className="mr-20 h-full rounded-lg shadow-2xl"/>
          
        </div>
        <div className="w-1/2">
            <h5 className="text-2xl font-bold text-indigo-600"><u>About Us</u></h5>
          <h1 className="text-5xl font-bold">my Food <br/>Shop Food <br/> are Good <br/> in this Area</h1>
          <p className="py-6">
          Hospitality is among the most important elements in the restaurant industry, making customer service essential for success. Regardless of whether a restaurant has high quality ingredients, they cannot attract and keep loyal patrons if they have poor customer service.
          </p>
          <p className="py-6">
          Owners must take the time to choose the appropriate restaurant service model and train their employees to provide excellent customer service. From counter service cafes to table service fine dining, there are various service models to streamline the ordering, food preparation, and transaction processes.
          </p>
          <button className="btn btn-primary">Service Provide</button>
        </div>
      </div>
    </div>
  );
};

export default About;
