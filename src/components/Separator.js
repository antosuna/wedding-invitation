import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import Typewriter from 'typewriter-effect';
import './css/Separator.css';

const titleContainerStyle = {
    textAlign: 'center',
    margin: '20px auto',
  };

const Title = ({ title, subtitle }) => (
    <div style={titleContainerStyle}>
      <div className="title-line" />
      <div className="title-text">{title}</div>
      <div className="subtitle-text">{subtitle}</div>
      <div className="title-line" />
    </div>
  );
  

  const Separator = ({ title, subtitle }) => {
    const titleRef = useRef(null);

    useEffect(() => {
        anime({
          targets: titleRef.current,
          opacity: [0, 1],
          translateY: [-50, 0],
          duration: 2000,
          easing: 'easeOutExpo',
        });
      }, []);

    return(
    <div className="section-title">
        <Title ref={titleRef} title={title} subtitle={subtitle} />
    </div>
    );
};

export default Separator;