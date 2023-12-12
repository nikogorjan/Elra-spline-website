import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineAnimation = ({ onSplineLoaded }) => {
    
    const handleLoad = () => {
        onSplineLoaded();
        console.log('Spline loaded');
    };

    return (
        <Spline scene="https://prod.spline.design/k4s9uZYSTO0wPD0D/scene.splinecode" onLoad={handleLoad} />
    );
};

export default SplineAnimation;