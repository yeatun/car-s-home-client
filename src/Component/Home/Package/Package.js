import React, { useEffect, useState } from 'react';
import PackageInfo from './PackageInfo';

const Package = () => {
    const packageData = [
        {
            plan : 'Basic Plan',
            package1 : 'Auto Washing',
            package2 : ' 2 Bike & 3 Cars Free',
            package3 : ' Interior Cleaning',
            price: '19.99'
        },
        {
            plan : 'Regular Plan',
            package1 : 'Auto Washing',
            package2 : ' 2 Bike & 3 Cars Free',
            package3 : ' Interior Cleaning',
            price: '45.99'
        },
        { 
            plan : 'Popular Plan',
        package1 : 'Auto Washing',
        package2 : ' 2 Bike & 3 Cars Free',
        package3 : ' Interior Cleaning',
        price: '156.99'
        },
        { 
            plan : 'Premium Plan',
        package1 : 'Auto Washing',
        package2 : ' 2 Bike & 3 Cars Free',
        package3 : ' Interior Cleaning',
        price: '199.99'
        }
    ]
 
    
    return (
        <div>
            <section className="justify-content-center  my-5 py-5 ">
        <div className="container ">
            <div className="section-header text-center">
             
                <h1>all packages  </h1>
            </div>
            <div className=" row mt-5  pt-5">
                 {
                     packageData.map(packageData => <PackageInfo packageData={packageData} key={packageData.plan}/>)
                 }
             </div>
        </div>
    </section>
        </div>
    );
};

export default Package;