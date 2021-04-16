import React from 'react';

const ServiceData = ({services}) => {
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Date</th>
         
            </tr>
        </thead>
        <tbody>
            {
                 services.map((service, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{service.service}</td>
                    <td>{service.date}</td>
                
                </tr>
                )
            }
        </tbody>
        </table>
    );
};

export default ServiceData;