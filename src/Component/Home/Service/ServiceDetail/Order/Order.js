import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../DashBoard/Sidebar/Sidebar';

const Order = () => {
    const {_id} =useParams();
    const [order ,setOrder] = useState([]);
    console.log(order)
    useEffect(() => {
        fetch('http://localhost:5000/newService')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])
    const orderList =  order.find(orders =>orders?._id===_id)
    return (
        <div className="container-fluid row">
           <div  className="col-md-4">
                <Sidebar></Sidebar>
           </div>
           <div className="col-md-5 p-5 text-center">
           <img style={{height: '100px'}} className="img-fluid mb-3" src= {orderList?.imageURL} alt=""/>
           <h1>{orderList?.name}</h1>
           <p className='text-secondary'>{orderList?.review}</p>
            <Link to='/dashBoard/payment' className="btn btn-success text-white">Booking Now</Link>
           </div>
        </div>
    );
};

export default Order;