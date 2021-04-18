import React ,{ useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import CheckData from '../CheckData/CheckData';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const CheckList = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const [checkList, setCheckList] = useState([]);
    // useEffect(() => {
    //     fetch(`https://limitless-lake-51288.herokuapp.com/serviceData`)
    //         .then(res => res.json())
    //         .then(data => setCheckList(data))
    // }, [])
    useEffect(() => {
        fetch(`https://limitless-lake-51288.herokuapp.com/order?email=${loggedInUser.email}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCheckList  (data)
            })
    }, [])
    return (
        <div>
                <div className="container-fluid row" >
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand text-center p-5">All check list</h5>
                <CheckData checkList={checkList} />
            </div>
             {/* <div className="col-md-4 container-fluid row">
            <Sidebar></Sidebar>
             </div>
             <div className='col-md-8'>
             <CheckData checkList={checkList} />
             </div> */}
        </div>
    );
};

export default CheckList;