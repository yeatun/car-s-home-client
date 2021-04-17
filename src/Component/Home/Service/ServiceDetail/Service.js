import React, { useEffect } from 'react';

import ServiceDetail from './ServiceDetail';



import { useState } from 'react';





const Service = () => {
  
    const [newServices, setNewServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newService')
        .then(res => res.json())
        .then(data => setNewServices(data))
    }, [])
    return (
       <section className = "services-container mt-5">
          <div className='text-center   '>
         
          </div>
           <div className ='d-flex justify-content-center'>
           <div className="w-75 row mt-5 pt-5">
               
           {
                newServices.map(service => <ServiceDetail  service={service}></ServiceDetail>)
            }
           

             {/* {
           serviceData.map(service=><Order service={service}></Order>)
            } */}
           </div>
        </div>
       </section>
    );
};

export default Service;