import React from 'react';
import videoSlide from '../../assets/videoSlide.mp4';
const HomePage = props => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoSlide} type="video/mp4" />
            </video>
        </div>
    );
};

export default HomePage;
