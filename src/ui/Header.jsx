import styled from "styled-components";
// import { HiMoon, HiSun } from "react-icons/hi2";
// import StyledButton from "./Button";
import StyledLink from "./Link";

const StyledHeader = styled.header`
  background-color: transparent;
  font-family: "Vast Shadow", serif;
  font-size: 2rem;
  height: 7vh;
  padding: 2rem 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  color: var(--color-indigo-200);
  display: inline-block;
  font-size: 3rem;
  font-style: normal;
  font-weight: 300;
  text-transform: lowercase;
`;

const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
`;

const StyledP = styled.p`
  color: var(--color-indigo-200);
  display: inline-block;
`;
const StyledImage = styled.img`
  display: block;
  height: 3rem;
  width: auto;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>Fer.Codes</StyledLogo>
      <StyledOptions>
        {/* <StyledButton>
          <HiMoon />
        </StyledButton> */}
        <StyledP>By</StyledP>

        <StyledLink to="/">
          <StyledImage src="./jonas_logo-small.png" alt="Jonas Logo" />
        </StyledLink>
      </StyledOptions>
    </StyledHeader>
  );
}

export default Header;
