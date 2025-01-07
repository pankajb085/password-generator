import React from 'react';
import "../styles/_strengthmeter.scss";

function StrengthMeterComp({checked}) {

  const getClassName1 = () => {
    switch (checked) {
        case 1: return "active1 child";
        case 2: return "active11 child";
        case 3: return "active111 child";
        case 4: return "active1111 child";
        default: return "child";
    }
  };

  const getClassName2 = () => {
    switch (checked) {
        case 2: return "active2 child";
        case 3: return "active22 child";
        case 4: return "active222 child";
        default: return "child";
    }
  };

  const getClassName3 = () => {
    switch (checked) {
        case 3: return "active3 child";
        case 4: return "active33 child";
        default: return "child";
    }
  };

  const getClassName4 = () => {
    switch (checked) {
        case 4: return "active4 child";
        default: return "child";
    }
  };

  return (
    <div className="parent">
        <div className={getClassName1()}></div>
        <div className={getClassName2()}></div>
        <div className={getClassName3()}></div>
        <div className={getClassName4()}></div>
    </div>
  )
}

export default StrengthMeterComp