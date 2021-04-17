import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>home</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashBoard/payment" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/checkList" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking List</span> 
                    </Link>
                </li>
               
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
                    </Link>
                </li>
                {isAdmin &&  <div>
                    <li>
                    <Link to="/allService" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                    </Link>
                </li>
                    <li>
                    <Link to="/admin" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>make admin</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/addNewService" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Add New Service</span>
                    </Link>
                    </li>
              
               
                </div>}
               
            </ul>
            
        </div>
    );
};

export default Sidebar;