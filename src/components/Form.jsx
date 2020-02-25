import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="weight" id="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in kgs"
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      /><br></br><br></br>
      <label htmlFor="height" id="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height in cm"
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      /><br></br><br></br><br></br>
      <button id="calculate" id="button">Calculate BMI</button>
      <br></br><br></br><br></br>
      <label id="switch">
        Imperial
        <br></br><br></br><input type="checkbox" id="check"></input>
        <span class="slider round"></span>
      </label>
    </form>
  );
};

export default Form;
