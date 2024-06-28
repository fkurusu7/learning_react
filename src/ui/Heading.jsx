import styled, { css } from "styled-components";

const StyledHeading = styled.h1`
  background-color: transparent;
  color: var(--color-indigo-400);
  line-height: 1.5;
  letter-spacing: 1rem;
  margin: 2rem 0;
  text-align: center;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-family: "Monoton", sans-serif;
      font-size: 4.7rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-family: "Monoton", sans-serif;
      font-size: 3rem;
      font-weight: 500;
    `}
`;

export default StyledHeading;
