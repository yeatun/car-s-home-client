import React from 'react';
import carService from '../../../images/car-1.png'
const TopBanner = () => {
    return (
      <main>
           <main style={{height:'600px'}} className ="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className='text-brand'><b>Professional Auto</b> <br/><b>Car servicing</b></h1>
                <p className ="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam, iure tempore itaque libero officiis.</p>
                <button className ="btn btn-dark text-white">GET BOOKING</button>
            </div>
            <div className="col-md-6">
                <img src={carService} alt="" className ="img-fluid"/>
            </div>
        </main>
      </main>
    );
};

export default TopBanner;