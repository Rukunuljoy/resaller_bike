import React from "react";

const Blog = () => {
  return (
    <div className="mb-20 mt-20">
      <div className="flex flex-col w-full lg:flex-row ">
        <div className="grid flex-grow h-96 card bg-base-300 rounded-box place-items-center">
          <div className="ml-10 mr-10">
            <p className="text-orange-600">Q1.Difference between SQL and NoSQL.</p>
            = SQL is the programming language used to interface with relational databases.<br/>
            NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

          </div>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow h-96 p-50 card bg-base-300 rounded-box place-items-center text-xl font-semibold">
          <div className="ml-10 mr-10">
          <p className="text-orange-600">Q2.What is JWT, and how does it work?</p>
          = JSON Web Token is an open standard for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider.<br/>
          Basically the identity provider generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.<br/>
          1.User sign-in using username and password or google/facebook.<br/>
          2.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.<br/>
          3.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.<br/>
          4.Resource server then verifies the authenticity of the token using the secret salt/ public key.<br/>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row mt-20">
        <div className="grid flex-grow h-56 card bg-base-300 rounded-box place-items-center">
           
            <div className="ml-10 mr-10">
            <p className="text-orange-600">Q3.What is the difference between javascript and NodeJS?</p>
            = JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
           </div>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow h-56 card bg-base-300 rounded-box place-items-center">
            <div className="ml-10 mr-10">
            <p className="text-orange-600">Q4.How does NodeJS handle multiple requests at the same time?</p>
            = NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
