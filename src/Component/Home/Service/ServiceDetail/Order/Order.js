import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../../App';
// import DashBoard from '../../../../DashBoard/DashBoard/DashBoard';
import Sidebar from '../../../../DashBoard/Sidebar/Sidebar';
import Payment from '../../../../Payment/Payment';

const Order = () => {
    const {_id} =useParams();
    const history = useHistory();
    const [service ,setService] = useState({});
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    const [shippingData, setShippingData] = useState(null);
    const [order ,setOrder] = useState([]);
    console.log(order)
    useEffect(() => {
        fetch('http://localhost:5000/newService')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])
    const onSubmit = data => {
        console.log(data)
        setShippingData(data)
        }
    const orderList =  order.find(orders =>orders?._id===_id)
    const handlePaymentSuccess= paymentId=>{
        const orderDetails = { user: loggedInUser.name, mail: loggedInUser.email ,orderTime: new Date(),  name: shippingData.name,
            email: shippingData.email,
            address: shippingData.address,
            phone: shippingData.phone, 
            paymentId,
        service:orderList?.name}
        console.log(orderDetails);
      
        
        fetch(`http://localhost:5000/addService`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                // closeModal();
                alert('payment created successfully.');
            }
        })
    }
    

    return (
        <div className="container-fluid row">
           <div  className="col-md-2">
                <Sidebar></Sidebar>
           </div>
           <div className="col-md-5 p-5 text-center">
           <img style={{height: '100px'}} className="img-fluid mb-3" src= {orderList?.imageURL} alt=""/>
           <h1>{orderList?.name}</h1>
           <p className='text-secondary'>{orderList?.review}</p>
            {/* <Link to={`/dashBoard/${orderList?._id}`} className="btn btn-success text-white">Booking Now</Link> */}
         
           </div>
           <div style= {{display: shippingData ? 'none': 'block'}} className="col-md-5 p-5 ">
            <h3 className='text-center'>Make payment{orderList?.name} </h3>
            <form onSubmit={handleSubmit(onSubmit)}  className="p-5">
         
         <div className="form-group">
             <input name='name' type="text" {...register("name")}  placeholder= "name"className="form-control" />
             {/* {errors.name && <span className="text-danger">This field is required</span>} */}
             

         </div>
         <div className="form-group">
             <input name='phone' type="text" {...register("phone")} placeholder="Phone Number" className="form-control" />
             {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
         </div>
         <div className="form-group">
             <input name='email' type="text" {...register("email")} placeholder="Email" className="form-control" />
             {/* {errors.email && <span className="text-danger">This field is required</span>} */}
         </div>
         <div className="form-group">
             <input name='address' type="text" {...register("address")} placeholder="Address" className="form-control" />
             {/* {errors.email && <span className="text-danger">This field is required</span>} */}
         </div>
       

        
    
   
     
     <div className="form-group text-right">
        
        <button type="submit" className="btn btn-dark ms-5">Send</button>
    </div> </form>
          
            </div>
          <div style={{display: shippingData ? 'block': 'none'}} className="col-md-5 p-5 ">  <Payment handlePayment={handlePaymentSuccess}></Payment></div>
        </div>
    );
};

export default Order;