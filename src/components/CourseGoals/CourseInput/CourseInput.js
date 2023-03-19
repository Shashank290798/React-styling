import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]=useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0 ){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };
  const buttonStyle = {
    background: !isValid ? 'none' : '',
    borderColor: !isValid ? 'red': '',
    filter: !isValid ? 'blur(2px)' : ''
  };
  return (
    <form onSubmit={formSubmitHandler}>
    <div className={`form-control ${!isValid ? 'invalid' : ''} `}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
        {!isValid && <span style={{color: 'red'}}>Please enter a valid goal.</span>}
      </div>
      <Button style={buttonStyle} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
