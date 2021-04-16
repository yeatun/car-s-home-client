import React, { useEffect, useState } from 'react';
import person1 from '../../images/Ellipse 90.png';
import person2 from '../../images/Ellipse 91.png';
import person3 from '../../images/Ellipse 92.png';
import TestimonialInfo from './TestimonialInfo';
const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    // [
    //     {
    //         name : 'robert down',
    //         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
    //         place: 'california',
    //         img : person1
    //     },
    //     {
    //         name : 'hith rock',
    //         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
           
    //         place: 'london',
    //         img : person2
    //     },
    //     {
    //         name : 'Winson herry',
    //         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            
    //         place: 'paris',
    //         img : person3
    //     }
    // ]
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