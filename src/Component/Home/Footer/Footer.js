import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {
    const GEREZ = [
        {name: "Emergency Care" , link: "/emergency"},
        {name: "Car Check Up" , link: "/checkup"},
        {name: "services" , link: "/services"},
        {name: "Auto engin services" , link: "/Auto-engin-services"},
        {name: "Interior cleaning" , link: "/Interior-cleaning"},
    ]
    const Address = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const Newsletters = [
        {name: "Perspiciatis unde omnis natus" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Interior cleaning" , link: "/emergency"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const Contact   = [
        {name: "Sed uterspis unde omnis iste" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Sed uterspis unde omnis iste" , link: "/emergency"},
        {name: "emergency" , link: "/emergencyt"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both"style={{backgroundColor:'#E5E4E2'}}>
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"GEREZ"} menuItems={GEREZ}/>
                    <FooterCol key={2} menuTitle="Address" menuItems={Address}/>
                    <FooterCol key={3} menuTitle="Newsletters" menuItems={Newsletters}/>
                    <FooterCol key={4} menuTitle="Contact" menuItems={Contact}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-dark">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;