import React, { useState } from 'react'
import '../styles/_input.scss';
import copyIcon from '../assets/images/icon-copy.svg'

function InputComponent({value, setValue}) {
  const [className, setClassName] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setClassName("copied");

    setTimeout(() => {
      setClassName("");
    }, 2000);
  };

  return (
    <div className="input-container">
      <input type="text" placeholder="P4$5W0rD!" value={value} onChange={setValue} readOnly />
      <span className={className}>Copied</span>
      <img src={copyIcon} onClick={handleCopy} className="copy-icon" alt="Copy" />
    </div>
  )
}

export default InputComponent