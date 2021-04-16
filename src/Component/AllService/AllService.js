import React ,{ useEffect, useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';


import ServiceData from './ServiceData/ServiceData';
const AllService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/serviceData')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
             <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Services</h5>
                <ServiceData services={services} />
            </div>
        </div>
        </div>
    );
};

export default AllService;