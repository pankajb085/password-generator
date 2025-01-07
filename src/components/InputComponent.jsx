import React from 'react'
import '../styles/_input.scss';
import copyIcon from '../assets/images/icon-copy.svg'
function InputComponent({value, setValue}) {

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="input-container">
      <input type="text" placeholder="P4$5W0rD!" value={value} onChange={setValue}/>
      <span className="copied">Copied</span>
      <img src={copyIcon} onClick={handleCopy} className="copy-icon" alt="Copy" />
    </div>
  )
}

export default InputComponent