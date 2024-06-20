import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 100%;

  & > svg {
    height: 1.9rem;
    width: auto;
    color: var(--color-brand-600);
  }

  &.signout > svg {
    color: var(--color-red-700);
  }
`;

function MainApp() {
  return (
    <div>
      <ul>
        <li>
          <StyledLink to="/pizzas">Pizzas</StyledLink>
        </li>
        <li>
          <StyledLink to="/steps">Steps</StyledLink>
        </li>
        <li>
          <StyledLink to="/travel">Travel List</StyledLink>
        </li>
        <li>
          <StyledLink to="/accordion">Accordion</StyledLink>
        </li>
        <li>
          <StyledLink to="/calctip">Tip Calcultator</StyledLink>
        </li>
        <li>
          <StyledLink to="/usepopcorn">Use Popcorn</StyledLink>
        </li>
        <li>
          <StyledLink to="/starrating">Star Rating</StyledLink>
        </li>
        <li>
          <StyledLink to="/hrw">How React Works (pending)</StyledLink>
        </li>
      </ul>
    </div>
  );
}

export default MainApp;
