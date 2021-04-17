import React ,{ useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import CheckData from '../CheckData/CheckData';

const CheckList = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     const [checkList, setCheckList] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/serviceData`)
    //         .then(res => res.json())
    //         .then(data => setCheckList(data))
    // }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${loggedInUser.email}`, {
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
             <CheckData checkList={checkList} />
        </div>
    );
};

export default CheckList;