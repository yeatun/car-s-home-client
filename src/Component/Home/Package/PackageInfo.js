import React from 'react';

const PackageInfo = ({packageData}) => {
    return (
      
            <div className='col-md-3 text-center'>
                <h3>{packageData.plan}</h3>
                 <p className="text-dark text-center">{packageData.package1}</p>
                <p className="text-dark text-center">{packageData.package2}</p>
                <p className="text-dark text-center">{packageData.package3}</p>
                <p className="text-dark text-center">$ {packageData.price}</p>
                <button className='btn btn-dark'>see more</button>
            </div>
     
    );
};

export default PackageInfo;