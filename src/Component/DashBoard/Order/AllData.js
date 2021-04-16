import React from 'react';

const AllData = ({order}) => {
    return (
        <div>
            {order.user} {order.id}
            <img className="me-3" src={order.img} alt="" width="60"/>
           
        </div>
    );
};

export default AllData;