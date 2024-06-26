import styled from "styled-components";
import { HiMoon, HiSun } from "react-icons/hi2";

const StyledHeader = styled.header`
  border: 1px solid red;
  font-size: 2rem;
  padding: 2rem 0;
  width: 100%;
  height: 4vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div``;

const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>LOGO</StyledLogo>
      <StyledOptions>
        <button>
          <HiMoon />
        </button>
        <button>
          <HiSun />
        </button>
        <p>JONAS</p>
      </StyledOptions>
    </StyledHeader>
  );
}

export default Header;
