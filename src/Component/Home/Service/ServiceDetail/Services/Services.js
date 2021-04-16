import React from 'react';
import Calnder from '../Calender/Calnder';
import 'react-calendar/dist/Calendar.css';
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
               <Calnder handleDateChange={handleDateChange} ></Calnder>
               <Service date={selectedDate}></Service>
        </div>
    );
};

export default Services;