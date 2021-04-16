import React from 'react';

const TestimonialInfo = ({review}) => {
    return (
        <div className="col-md-4 justify-content-center  ">
      <div className='mt-5'>
      

        <div className=" d-flex mt-3 mb-3">
           
           
            <img className="me-3" src={review.imageURL} alt="" width="60"/>
            <div>
                <h6 className="text-primary">{review.name}</h6>
                {/* <p className="m-0">{review.place}</p> */}
            </div>
        </div>
        <div ><small>{review.quote}</small>
         </div>
      </div>
   </div>
    );
};

export default TestimonialInfo;