import React from 'react'
import "../styles/_button.scss";
import rightArrow from '../assets/images/icon-arrow-right.svg';

function Button({onClick}) {
  return (
    <button onClick={onClick}>
        Generate
        <img src={rightArrow} alt="Right Arrow" />
    </button>
  )
}

export default Button