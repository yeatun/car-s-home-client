import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopBanner from './TopBanner/TopBanner';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
        </div>
    );
};

export default Header;