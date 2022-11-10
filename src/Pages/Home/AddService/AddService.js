import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddService = () => {
    const navigate = useNavigate();

    useTitle('AddService')
  
  const {user} = useContext(AuthContext)

  const handleService =event =>{
    event.preventDefault();
    const form =event.target;
    const name = `${form.Name.value}}`;
    const price = `${form.price.value}`;
    const img = `${form.img.value}`
    const description=`${form.description.value}`

    const service = {
        
        serviceName:name,
       img,
       description,
       price,
    }

    fetch('https://travel-service-server.vercel.app/services',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledge){
            alert('review successfully')
            form.reset();
            navigate('/services')
        }
    })
    .catch(err=>console.log(err))

  }
    return (
        
     <div className='card w-96 bg-base-100 shadow-xl mb-20 mt-20 p-10' >
         <form onSubmit={handleService} className="mx-10 my-10"/>
       <div>
       <div>
            <label htmlFor="name" className='block mb-2 text lg font-medium'>Service Name</label>
            <input htmlFor="text" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
            <label htmlFor="name" className='block mb-2 text lg font-medium'>Service url</label>
            <input htmlFor="image" type="link" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
            <label htmlFor="name" className='block mb-2 text lg font-medium'>Service description</label>
            <input htmlFor="text" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div>
            <label htmlFor="name" className='block mb-2 text lg font-medium'>Service price</label>
            <input htmlFor="text" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="mt-5">
        <input type="submit" className='w-full p-2 rounded-xl bg-orange-600 text-white font-bold hover:text-orange-400 '/>
        </div>
       </div>
     </div>
       
    );
};

export default AddService;