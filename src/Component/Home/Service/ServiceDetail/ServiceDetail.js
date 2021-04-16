import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


import ServiceForm from './Services/ServiceForm/ServiceForm';

// import Order from '../../../Order/Order';

const ServiceDetail = ({service,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      // const url = `/dashBoard/order`;
      // history.push(url);
      setIsOpen(true);
    }
  
    // function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    // //   subtitle.style.color = '#f00';
    // }
  
    function closeModal(){

      setIsOpen(false);
    }
//     const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    
    // const history = useHistory();



// const [product ,setProduct] = useState({});


// const handleCheckOut = () =>{
//     const orderDetails = { user: loggedInUser.name, email: loggedInUser.email,  orderTime: new Date()}
//     console.log(orderDetails);

//     fetch('http://localhost:5000/addService', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify(orderDetails)
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
    
// }

// useEffect(()=>{
//     fetch(`http://localhost:5000/dashBoard/order`)
//     .then(res =>res.json())
//     .then(data =>{ setProduct(data)
       
//     console.log(data)});

// },[])
   
    return (
        <div className='col-md-4 text-center'>
             {/* {
            service.image?<img style={{height: '200px'}} src={`data:image/png;base64,${service.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${service.img}`} alt=""/>
        } */}
              <img style={{height: '100px'}} className="img-fluid mb-3" src= {service.img} alt=""/>
            <h5 className='mt-3 mb-3 text-brand'>{service.name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, recusandae!</p>


            <Link to={`/dashBoard/${service.id}`} className ="btn btn-success text-white" >BOOKING...</Link>
            {/* <DashBoard serviceOn={service.name}></DashBoard> */}
          

            <button  onClick={openModal} className ="btn btn-dark text-white">BOOKING...</button>
            <ServiceForm modalIsOpen={modalIsOpen} serviceOn={service.name} serviceImg={service.img}  date={date} closeModal={closeModal}></ServiceForm>
            {/* <Order service={service}></Order> */}
           
        </div>
    );
};

export default ServiceDetail;