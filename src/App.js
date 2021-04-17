import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import DashBoard from "./Component/DashBoard/DashBoard/DashBoard";
import AddAdmin from "./Component/AddAdmin/AddAdmin";
import PrivateRoute from "./Component/Login/PrivateRoute";
import AllService from "./Component/AllService/AllService";
import AddReview from "./Component/DashBoard/AddReview/AddReview";
import AddNewService from "./Component/AddNewService/AddNewService";
import Order from "./Component/Home/Service/ServiceDetail/Order/Order";
import CheckList from "./Component/CheckList/CheckList";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
      <Route exact path ="/">
        <Home></Home>
      </Route>
      <PrivateRoute path= "/dashBoard/payment">
        <DashBoard></DashBoard>
      </PrivateRoute>
      <PrivateRoute path= "/checkList">
        <CheckList></CheckList>
      </PrivateRoute>
      <PrivateRoute path= "/order/:_id">
        <Order></Order>
      </PrivateRoute>
      
      
      <PrivateRoute path= "/admin">
        <AddAdmin></AddAdmin>
      </PrivateRoute>
       
      <PrivateRoute path= "/addReview">
        <AddReview></AddReview>
      </PrivateRoute>
      <PrivateRoute path= "/addNewService">
        <AddNewService></AddNewService>
      </PrivateRoute>
      <PrivateRoute path="/allService">
            <AllService></AllService>
          </PrivateRoute>
      
      <Route path= "/login">
        <Login></Login>
      </Route>
    </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
