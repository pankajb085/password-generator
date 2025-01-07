import React from 'react'
import '../styles/_checkbox.scss'
function CheckboxComp({label, checked, handleChange}) {
  return (
    <div className='row'>
      <input type="checkbox" id={label} onChange={handleChange} checked={checked} />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default CheckboxComp