import React from 'react';
import technicianTwo from '../../images/Technician-2.png'
const OurGarez = () => {
    return (
        <main style={{height:'800px'}} className ="row  d-flex align-items-center ">
            <div className='col-md-4 offset-md-1'>
                <img  className="img-fluid" style={{height:'400px'}} src={technicianTwo} alt=""/>
            </div>
            <div  className='col-md-6'>
                <h3>We’re Certified & Expert Car <br/>Servicing Agency</h3>
                <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> At nobis consectetur exercitationem perspiciatis doloribus.<br/> Corporis, facilis! Aliquam laboriosam, officia hic <br/>culpa nisi pariatur facere, et voluptate odio, eius modi quis?</p>
                
                <button className='btn btn-dark'>Learn More</button>
            </div>
        </main>
    );
};

export default OurGarez;