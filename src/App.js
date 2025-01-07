import React, {useState} from "react";
import InputComponent from "./components/InputComponent";
import SliderComponent from "./components/SliderComponent";
import CheckboxComp from "./components/CheckboxComp";
import StrengthMeterComp from "./components/StrengthMeterComp";
import Button from "./components/Button";

function App() {
  const includeArray = [{label: "Include Uppercase Letters", checked: false}, {label: "Include Lowercase Letters", checked: false},
     {label: "Include Numbers", checked: false}, {label: "Include Symbols", checked: false}];

  const [arr, setArr] = useState(includeArray);
  const [charLength, setCharLength] = useState(10);
  const [password, setPassword] = useState("");

  const handleChange = (evnt) => {
    const {id, checked} = evnt.target;

    const modifiedData = arr.map(item => {
      if(item.label === id){
        return {
          ...item,
          checked
        }
      }
       return item;
    });
    setArr(modifiedData);
  };

  const getStrengthLabel = (param) => {
    const checked =  arr.filter(item => item.checked).length;

    if(param){
      return checked;
    }

    switch(checked){
      case 1: return 'Too Weak!';
      case 2:  return 'Weak!';
      case 3: return 'Medium';
      case 4: return 'Strong';
      default: return '';
    }
  };

  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    debugger;
    const checkedArray = arr.filter(item => item.checked);
    const checkedLabels = checkedArray.map(item => {
      return item.label;
    })
     // Ensure at least one character from each set
    let allChars = "";
    let password = "";

    if(checkedLabels.includes("Include Lowercase Letters")) {
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      allChars += lowerCase;
    }

    if(checkedLabels.includes("Include Uppercase Letters")) {
      password += upperCase[Math.floor(Math.random() * upperCase.length)];
      allChars += upperCase;
    }

    if(checkedLabels.includes("Include Numbers")) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
      allChars += numbers;
    }

    if(checkedLabels.includes("Include Symbols")) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
      allChars += symbols;
    }
    
    // Fill the rest of the password
    for (let i = checkedArray.length; i < charLength; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password to ensure randomness
    password = password.split("").sort(() => 0.5 - Math.random()).join("");

    setPassword(password);
  };

  return (
    <div className="generator">
      <h1 className="title">Password Generator</h1>
      <InputComponent value={password} setValue={(e) => setPassword(e.target.value)} />
      <div className="pass-generator">
        <SliderComponent charLength={charLength} setCharLength={setCharLength} />
        <div className="checkboxes">
          {
            arr.map(item => <CheckboxComp checked={item.checked} key={item.label} label={item.label}
               handleChange={(e) => handleChange(e)} />)
          }
        </div>
        <div className="strength">
          <span className="label">Strength</span>
          <div className="medium-block">
            <span className="medium">{getStrengthLabel()}</span>
            <StrengthMeterComp checked={getStrengthLabel("count")}/>
          </div>
        </div>
        <Button onClick={generatePassword} />
      </div>
    </div>
  );
}

export default App;
