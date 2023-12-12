import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onVideoLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const throttle = 0.9; // 0-1
    let i = 0;
    let animationFrameId;

    const draw = () => {
      if (i <= 100) {
        const r = Math.random();

        animationFrameId = requestAnimationFrame(draw);
        setProgress(i);

        if (r < throttle) {
          i = i  + 1;
        }
      } else {
        cancelAnimationFrame(animationFrameId);
        // Send progress to the parent component
        onVideoLoaded({ progress: 100 });
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onVideoLoaded]);

  return (
    <div className={`loading-screen-overlay ${progress === 100 ? 'move-up' : ''}`}>
      {/*<div className="loading-circle"></div>
      <div className="loading-screen-content">Loading...</div>*/}
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <h1 className="count">{Math.round(progress)}%</h1>
    </div>
  );
};

export default LoadingScreen;