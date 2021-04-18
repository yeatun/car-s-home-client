import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch('https://limitless-lake-51288.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: loggedInUser.email })
    })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
}, [])
    return (
      
        <div>
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
             <nav class="navbar navbar-expand-lg navbar-light  text-white">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul>
   <li class="nav-item ">
          <a class="nav-link text-brand" aria-current="page" href="#"><h1><b>Car's Home </b> </h1></a>
        </li>
   </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     
        <li class="nav-item">
          <a class="nav-link ms-5 active text-brand" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/checkList">Booking List</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/addReview">Review</Link>
        </li>
        {isAdmin &&    <div>
       <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/admin">admin</Link>
        </li>
       </div>}
        {/* <li class="nav-item">
        <Link className="nav-link ms-5 text-brand" to="/dashBoard/order">Dashboard</Link>
        </li> */}
        {/* <li class="nav-item">
        <Link class="nav-link ms-5 text-brand " to="/admin">admin</Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/login">login</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link ms-5 text-brand " > {loggedInUser.email}</Link>
        </li>
      
      
      </ul>
      
    </div>
  </div>
</nav>
</UserContext.Provider>
        </div>
    );
};

export default Navbar;