import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background: ${(props) =>
    props.type === "submit"
      ? "linear-gradient(180deg, #1f584b, #17493d)"
      : "transparent"};
  color: #c2e9e0;
  font-family: "Roboto Condensed", sans-serif;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.type === "submit"
        ? "linear-gradient(180deg, #1b5346, #113c32)"
        : "transparent"};
    color: ${(props) => (props.type === "submit" ? "#c2e9e0" : "#91e1d0")};
  }
`;

const Button = (props) => {
  return <StyledButton type={props.type}>{props.children}</StyledButton>;
};

export default Button;
