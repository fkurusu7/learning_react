import { FaXTwitter } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";
import styled from "styled-components";
import StyledLink from "./Link";

const StyledFooter = styled.footer`
  border-top: 1px solid var(--color-indigo-500);
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
      <StyledLink
        to="https://x.com/FdoCuva"
        target="_blank"
        rel="noopener noreferrer"
        size="large"
        variation="iconified"
      >
        <FaXTwitter />
      </StyledLink>
      <StyledLink
        to="https://x.com/FdoCuva"
        target="_blank"
        rel="noopener noreferrer"
        size="largeicon"
        variation="iconified"
      >
        <DiGithubBadge className="github" />
      </StyledLink>
    </StyledFooter>
  );
}

export default Footer;
