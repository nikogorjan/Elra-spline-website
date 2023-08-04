import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen-overlay">
            <div className="loading-circle"></div>

            <div className="loading-screen-content">Loading...</div>
        </div>
    );
};

export default LoadingScreen;