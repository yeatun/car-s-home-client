import React from 'react';
import carService from '../../../images/car-1.png';
import {useSpring, animated} from 'react-spring';


const TopBanner = () => {
   
    const props = useSpring({
        to: [{opacity: 10, color: '#ffaaee'}, {opacity: 100, color: 'rgb(14,26,19)'}],
        from: {opacity: 1000, color: 'red'}
      })
     

    return (
        
      <main>
           <main style={{height:'600px'}} className ="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
            
                <h1 className='text-brand'> <animated.div style={props}><b>Professional Auto</b> <br/><b>Car servicing </b></animated.div></h1>
                <p className ="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur laboriosam, iure tempore itaque libero officiis.</p>
                <button className ="btn btn-success text-white">lear more </button>
            </div>
            <div className="col-md-6">
                <img src={carService} alt="" className ="img-fluid"/>
            </div>
        </main>
      </main>
    );
};

export default TopBanner;