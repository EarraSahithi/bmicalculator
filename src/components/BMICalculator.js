import { useState } from "react";
import "./BMICalculator.css";

export function BMICalculator() {
  const [weight, updateWeightValue] = useState("");
  const [height, updateHeightValue] = useState("");
  const [bmiValue, updateBMIValue] = useState(null);
  const [low, updateLowValue] = useState("");
  const [high, updateHighValue] = useState("");
  const [message, updateMessage] = useState("");

  function displayBMIValue2(){
    if(bmiValue >= 18.5 && bmiValue <= 24.99){
    updateMessage(` You are in a healthy weight range ` ) ;
   }
   else if(bmiValue >= 25 && bmiValue <= 29.9){
    updateMessage(` You are overweight`) ;
   }
   else if(bmiValue >= 30){
       updateMessage(`You are obese`) ;
   }
   else if(bmiValue < 18.5){
      updateMessage(` You are under weight`)
   }
   
  }
  function calculateBMIValue() {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedOffBMIValue = bmiValue.toFixed(2);
    updateBMIValue(roundedOffBMIValue);
    const low = Math.round(18.5 );
    const high = Math.round(24.99 );
    
    displayBMIValue2()
  }
  function handleWeightInputChange(e) {
    updateWeightValue(e.target.value);
  }
  function handleHeightInputChange(e) {
    updateHeightValue(e.target.value);
  }
  function handleLowInputChange(e) {
    updateLowValue(e.target.value);
  }
  function handleHighInputChange(e) {
    updateHighValue(e.target.value);
  }
  function handleMeassageInputChange(e) {
    updateMessage(e.target.value);
  }
  
  function displayBMIValue() {
    if (bmiValue !== null) {
    
      return <div>
        Your BMI Value is {bmiValue} <br/> {message} <br/></div>;
    }
    
    }
  return (
    <div className="container form-container">
      <div>
        <label className="me-4 mt-5 ">Enter your height in cms:</label><br />
        <input
          type="text"
          value={height}
          onChange={handleHeightInputChange}
        ></input>
      </div>
      <div>
        <label className=" font-weight-bold me-4 mt-4">Enter your weight in kgs:</label><br/>
        <input
          type="text"
          value={weight}
          onChange={handleWeightInputChange}
        ></input>
      </div>
      <button
        type="button"
        className=" btn-lg btn btn-primary mt-4 "
        onClick={calculateBMIValue}
      >
        submit
      </button>
      <br /> <br />{displayBMIValue()}
       
    </div>
  );
}