import styled from "styled-components";
import Button from "../UI/Button";
import { useState } from "react";

const StyledForm = styled.form`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);

  & label {
    display: block;
    margin-bottom: 0.25rem;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  & input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #76c0ae;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #c2e9e0;
    font-size: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const InvForm = () => {
  const [userInput, setUserInput] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
  });

  const inputChangeHandler = (evt) => {
    const fieldName = evt.target.id;
    const fieldValue = evt.target.value;

    setUserInput({
      ...userInput,
      [fieldName]: fieldValue,
    });
  };
  return (
    <>
      <StyledForm>
        <InputGroup>
          <p>
            <label htmlFor="currentSavings">Current Savings ($)</label>
            <input
              type="number"
              id="currentSavings"
              value={userInput.currentSavings}
              onChange={inputChangeHandler}
            />
          </p>
          <p>
            <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearlyContribution"
              value={userInput.yearlyContribution}
              onChange={inputChangeHandler}
            />
          </p>
        </InputGroup>
        <InputGroup>
          <p>
            <label htmlFor="expectedReturn">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expectedReturn"
              value={userInput.expectedReturn}
              onChange={inputChangeHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInput.duration}
              onChange={inputChangeHandler}
            />
          </p>
        </InputGroup>
        <StyledDiv>
          <Button type="reset">Reset</Button>
          <Button type="submit">Calculate</Button>
        </StyledDiv>
      </StyledForm>
    </>
  );
};

export default InvForm;
