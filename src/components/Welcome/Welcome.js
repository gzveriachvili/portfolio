import './style/welcome.scss';
import SteeringText from './utils/SteeringText';
import { TextEffect } from './utils/TextEffect';
import React from 'react';
import { FaMousePointer } from 'react-icons/fa';
import background from './assets/img/background.svg';

const Welcome = () => {
  const toBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className='welcome'>
      <img src={background} alt='' srcset='' />
      <TextEffect text='frontend developer.' />
      <SteeringText />
      <span className='interaction-icon'>
        <FaMousePointer />
      </span>
      <p>Web Developer / Graphic Design Enthusiast</p>

      <div onClick={toBottom} class='btn btn-two'>
        <span>Contact Me</span>
      </div>

      <div className='scroll-down-indicator'>
        <div class='container'>
          <div class='arrows'></div>
          <div class='arrows'></div>
          <div class='arrows'></div>
          <span class='text'>Scroll down</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
