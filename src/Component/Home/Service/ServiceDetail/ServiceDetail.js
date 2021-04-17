import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ServiceDetail = ({service,date}) => {
    
    
    const history = useHistory();


    const {id} =useParams();

const [product ,setProduct] = useState({});



useEffect(()=>{
    fetch(`http://localhost:5000/dashBoard`)
    .then(res =>res.json())
    .then(data =>{ setProduct(data)
       
    console.log(data)});

},[])
   
    return (
        <div className='col-md-4 text-center'>
           
              <img style={{height: '100px'}} className="img-fluid mb-3" src= {service.imageURL} alt=""/>
            <h5 className='mt-3 mb-3 text-brand'>{service.name}</h5>
            <p className='text-secondary'>{service.review}</p>


            <Link to={`/order/${service._id}`} className ="btn btn-dark text-white" >BOOKING...</Link>
          
            
           
        </div>
    );
};

export default ServiceDetail;