import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/video-1.mp4' autoPlay loop muted/>
            <h1>This is the Way</h1>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Dark Side <i className='fab fa-empire'/>
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Light Side <i className='fab fa-rebel'/>
                </Button>
            </div>

        </div>
    )
}

export default HeroSection

