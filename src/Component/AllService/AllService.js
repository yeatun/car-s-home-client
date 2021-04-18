import React ,{ useEffect, useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';


import ServiceData from './ServiceData/ServiceData';


const AllService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://limitless-lake-51288.herokuapp.com/serviceData')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
             <div className="container-fluid row" >
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand text-center p-5">All Services</h5>
                <ServiceData services={services} />
            </div>
        
        </div>
    );
};

export default AllService;