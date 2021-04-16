import React from 'react';
import Calendar from 'react-calendar';
const Calnder = ({handleDateChange}) => {
  
    return (
        <div>
                <Calendar
            onChange ={handleDateChange}
        value={new Date()}
      />  
        </div>
    );
};

export default Calnder;