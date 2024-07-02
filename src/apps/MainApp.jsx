import styled from "styled-components";
import StyledLink from "../ui/Link";

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 3rem;
  column-gap: 2rem;

  list-style: none;
`;

const StyledLi = styled.li`
  background-color: var(--color-indigo-500);
  border-radius: var(--border-radius-md);
  height: 10rem;
  text-align: center;
  width: 15rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(0.5rem);
    background-color: var(--color-indigo-100);

    & > a {
      color: var(--color-indigo-900);
    }
  }
`;

function MainApp() {
  return (
    <div>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/pizzas" variation="simple" size="nosize">
            Pizzas
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/steps" variation="simple" size="nosize">
            Steps
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/travel" variation="simple" size="nosize">
            Travel List
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/accordion" variation="simple" size="nosize">
            Accordion
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/calctip" variation="simple" size="nosize">
            Tip Calcultator
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/usepopcorn" variation="simple" size="nosize">
            Use Popcorn
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/starrating" variation="simple" size="nosize">
            Star Rating
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/hrw" variation="simple" size="nosize">
            How React Works (pending)
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/reactquiz" variation="simple" size="nosize">
            React Quiz
          </StyledLink>
        </StyledLi>
      </StyledUl>
    </div>
  );
}

export default MainApp;
