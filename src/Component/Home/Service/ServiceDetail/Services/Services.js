import React from 'react';

import Service from '../Service';
import { useState } from 'react';
const Services = () => {
    const [ selectedDate,setSelectedDate ] =useState(new Date())
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
             <div className="  text-center">
           <h5 text-brand>What We Do</h5>
           <h2 text-brand>Quality Servicing Opportunity</h2>
      
           </div>
           
               <Service date={selectedDate}></Service>
        </div>
    );
};

export default Services;