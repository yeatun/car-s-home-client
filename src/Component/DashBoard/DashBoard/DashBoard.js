import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import ServiceDate from '../ServiceDate/ServiceDate';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    const [ selectedDate,setSelectedDate ] =useState(new Date());
    const [ servicesByDate,setServicesByDate ] =useState([])
    const handleDateChange = date =>{
        setSelectedDate(date);
       
    }
    
    useEffect(() =>{
        fetch(`http://localhost:5000/serviceByDate`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({date :selectedDate})
        })
        .then(res => res.json())
        .then(data => {
            setServicesByDate(data)

        })
    
    },[selectedDate])
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const [order, setOrder] = useState([])

    // useEffect(() =>{
    //     fetch(`http://localhost:5000/dashBoard/order`)
    //     .then(res =>res.json())
    //     .then(data =>{ setOrder(data)
           
    //     console.log(data)});
    
    // },[])
    //  {
    //     fetch(`http://localhost:5000/orderCollection?email=${loggedInUser.email}`, {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setOrder(data)
    //         })
    // }, [])

    return (
        <section>
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
        
            <div className="col-md-5 p-5 ">
            <Calendar
            onChange ={handleDateChange}
        value={new Date()}
      />  
            {/* <Payment></Payment> */}
            {/* <ul>
               {
                   order.map(order => <AllData order ={order}></AllData>)
               }
           </ul> */}
            </div>
            <div className="col-md-5 p-5 ">
              
            <ServiceDate servicesByDate={servicesByDate}></ServiceDate>
            </div>

        </div>
        
    </section>
    );
};

export default DashBoard;