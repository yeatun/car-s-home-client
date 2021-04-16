import React from 'react';
import technician from  '../../../images/technician.png';
import vehicle from '../../../images/vehicle.png';
import service from '../../../images/service.png';
import ServiceDetail from './ServiceDetail';
import DashBoard from '../../../DashBoard/DashBoard/DashBoard';


import { useState } from 'react';




const serviceData = [
    {   
        id: 1,
        name : 'Expert Members',
        img : technician
    },
    {
        id: 2,
        name : 'Quality Servicing',
        img : vehicle
    },
    {
        id: 3,
        name : 'Online Support',
        img : service
    }
]
const Service = ({date}) => {
  
  
    return (
       <section className = "services-container mt-5">
          <div className='text-center   '>
            <h2>Available service on {date . toDateString()}</h2>
          </div>
           <div className ='d-flex justify-content-center'>
           <div className="w-75 row mt-5 pt-5">
               
           {
                serviceData.map(service => <ServiceDetail date={date} service={service}></ServiceDetail>)
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