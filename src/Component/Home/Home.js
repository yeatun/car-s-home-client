import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';


import Header from './Header/Header';
import OurGarez from './OurGarez/OurGarez';

import Services from './Service/ServiceDetail/Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurGarez></OurGarez>
           <Services></Services>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;