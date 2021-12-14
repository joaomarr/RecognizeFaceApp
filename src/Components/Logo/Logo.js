import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.svg';

const Logo = () => {
    return (
        <div className='mt0'>
            <Tilt>
                <div className=' br-100 shadow-3 '>
                    <img src={brain} alt='logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;