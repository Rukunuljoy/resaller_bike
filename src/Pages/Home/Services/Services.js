import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState(([]))
    const location = useLocation();

    useEffect(() => {
        fetch('https://travel-service-server.vercel.app/services')
        .then((res) => res.json())
        .then((data) => {
            setServices(data)
        })
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='font-bold text-5xl mb-4'>Our Service Section</h2>
                <p>My Food Shop service practitioner provides high quality food and drink service to guests. A food service practitioner <br/> generally works in the commercial sector, offering a range of services to customers.</p>
             </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 mb-10'>
            {
                    location.pathname === '/' ? 
                    (
                        services.slice(0,3).map(service =><ServiceCard
                            key={service.id}
                            service={service}
                            ></ServiceCard>)
                    )
                    :
                    (
                        services.map(service =><ServiceCard
                            key={service.id}
                            service={service}
                            ></ServiceCard>)
                    )
                }
                
            </div>
            {
                    location.pathname === '/' ? 
                    (
                        <Link to='/services'><button className='btn btn-warning'>See All</button></Link>
                    )
                    :
                    (
                       <>
                       
                       
                       
                       </>
                    )
                }
            
        </div>
    );
};

export default Services;