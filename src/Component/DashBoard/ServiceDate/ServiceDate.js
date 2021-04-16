import React from 'react';
import ServiceShortList from '../ServiceShortList/ServiceShortList';

const ServiceDate = ({servicesByDate}) => {
    console.log(servicesByDate)
    return (
        <div>
        <h2 className="text-brand text-center">Appointments</h2>
        {
            servicesByDate.length ?
             <ServiceShortList  servicesByDate={servicesByDate} ></ServiceShortList>
            :
            <div className="p-5">
                <h4 className="lead text-center">No booking for this Date</h4>
            </div>
        }
    </div>
        // <div>
        //     <h1>service date:{servicesByDate.length}</h1>
        //     {
        //         servicesByDate.map(app=><li>{app.service}</li>)
        //     }
        // </div>
    );
};

export default ServiceDate;