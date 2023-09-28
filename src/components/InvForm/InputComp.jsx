import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #76c0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #c2e9e0;
  font-size: 1rem;
`;

const InputComp = ({ id, type, text }) => {
  return (
    <>
      <p>
        <StyledLabel htmlFor={id}>{text}</StyledLabel>
        <StyledInput type={type} id={id} />
      </p>
    </>
  );
};

export default InputComp;
