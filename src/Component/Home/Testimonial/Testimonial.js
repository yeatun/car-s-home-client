import React, { useEffect, useState } from 'react';

import TestimonialInfo from './TestimonialInfo';
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
    return (
        <div>
            <section className="justify-content-center  my-5 py-5 ">
        <div className="container ">
            <div className="section-header text-center">
                <h5 className="text-brand text-uppercase">Testimonial</h5>
                <h1>Clients Reviews  </h1>
            </div>
            <div className=" row mt-5  pt-5">
                 {
                     reviews.map(review => <TestimonialInfo review={review} key={review.name}/>)
                 }
             </div>
        </div>
    </section>
        </div>
    );
};

export default Testimonial;