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
          <StyledLink to="/pizzas">PIZZAS</StyledLink>
        </li>
      </ul>
    </div>
  );
}

export default MainApp;
