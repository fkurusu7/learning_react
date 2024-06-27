import { FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";
import StyledLink from "./Link";

const StyledFooter = styled.footer`
  color: var(--color-grey-500);
  font-family: "Lato", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  height: 7vh;
  text-align: center;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>
        Made with <span>❤️</span> by Fer.Codes
      </p>
      <StyledLink to="https://x.com/FdoCuva" size="large" variation="iconified">
        <FaXTwitter className="x" />
      </StyledLink>
    </StyledFooter>
  );
}

export default Footer;
