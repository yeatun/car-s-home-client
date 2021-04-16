import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';



const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    
    const history = useHistory();


const {id} =useParams();
const [product ,setProduct] = useState({});


const handleCheckOut = () =>{
    const orderDetails = { user: loggedInUser.name, email: loggedInUser.email, ...product ,orderTime: new Date()}
    console.log(orderDetails);

    fetch('http://localhost:5000/addService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    
}

   
    useEffect(()=>{
        fetch(`http://localhost:5000/dashBoard/${id}`)
        .then(res =>res.json())
        .then(data =>{ setProduct(data)
           
        console.log(data)});

    },[])
    


    return (
        <div>
          {product.id}
        <Link to="/DashBoard/order" className="btn btn-success" onClick={handleCheckOut}>check Out</Link>
        </div>
        
    );
};

export default Order;