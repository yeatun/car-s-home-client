import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import Payment from '../../Payment/Payment';

import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    const history = useHistory();
    const {_id} =useParams();
    const [service ,setService] = useState({});
    const [order ,setOrder] = useState([]);
    console.log(order)
    const [shippingData, setShippingData] = useState(null);
    // console.log(shippingData)
    const { register, handleSubmit, watch, errors } = useForm();
    // const [ selectedDate,setSelectedDate ] =useState(new Date());
    const [ servicesByDate,setServicesByDate ] =useState([])
    // const handleDateChange = date =>{
    //     setSelectedDate(date);
       
    // }
    useEffect(() => {
        fetch('http://localhost:5000/newService')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])

    const orderList =  order.find(orders =>order?._id===_id)
    console.log(orderList)
    const onSubmit = data => {
        console.log(data)
        setShippingData(data)
        }
    const handlePaymentSuccess= paymentId=>{
        const orderDetails = { user: loggedInUser.name, email: loggedInUser.email ,orderTime: new Date(),
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
        <section>
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
           
            <div style= {{display: shippingData ? 'none': 'block'}} className="col-md-5 p-5 ">
            <h3 className='text-center'>Make payment </h3>
            <form onSubmit={handleSubmit(onSubmit)}  className="p-5">
         
         <div className="form-group">
             <input name='name' type="text" {...register("name")}  placeholder= "service"className="form-control" />
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
          {/* <h1>name:{orderList?.name}</h1> */}

        </div>
        
    </section>
    );
};

export default DashBoard;