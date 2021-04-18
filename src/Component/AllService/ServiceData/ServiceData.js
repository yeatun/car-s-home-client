import React, { useState } from 'react';
import { useHistory } from 'react-router';
const ServiceData = ({services}) => {
    const history = useHistory();
    const handleDelete = (_id) => {
        fetch(`https://limitless-lake-51288.herokuapp.com/delete/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            console.log('delete successfully');

        })
        console.log('clicked', _id);
    }
  
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">phone</th>
            <th className="text-secondary" scope="col">email</th>
            <th className="text-secondary" scope="col">address</th>
            <th className="text-secondary" scope="col">payment id</th>
            <th className="text-secondary" scope="col">service name</th>
            <th className="text-secondary" scope="col">order</th>
            <th className="text-secondary" scope="col">delete</th>

         
            </tr>
        </thead>
      
          <tbody>
            {
                 services.map((service, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{service.name }</td>
                    <td>{service.phone }</td>
                    <td>{service.email}</td>
                    <td>{service.address}</td>
                    <td>{service.paymentId}</td>
                    <td>{service.service}</td>
                    <td><button className="btn btn-dark">done</button></td>
                    <td><button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete</button></td>

                
                </tr>
                )
            }
        </tbody>
        </table>
    );
};

export default ServiceData;