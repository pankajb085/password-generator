import React from 'react'
import '../styles/_checkbox.scss'
function CheckboxComp({id, label, checked, handleChange}) {
  return (
    <div className='row'>
      <input type="checkbox" id={id} name={label} onChange={handleChange} checked={checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckboxComp