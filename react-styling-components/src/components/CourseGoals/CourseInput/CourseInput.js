import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     color: ${(props) => (!props.isValid ? "red" : "black")};
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     background: ${(props) => (!props.isValid ? "#ffd7d7" : "transparent")};
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (!props.isValid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) return setIsValid(false);
    props.onAddGoal(enteredValue);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        >
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </div>
  );
};

export default CourseInput;
