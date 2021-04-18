import React from 'react';

const CheckData = ({checkList}) => {
    return (
        <div>
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
                 checkList.map((check, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{check.name }</td>
                    <td>{check.phone}</td>
                    <td>{check.email}</td>
                    <td>{check.address}</td>
                    <td>{check.paymentId}</td>
                    <td>{check.service}</td>
                    <td><button className="btn btn-dark">done</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>

                
                </tr>
                )
            }
        </tbody>
        </table>
        </div>
    );
};

export default CheckData;