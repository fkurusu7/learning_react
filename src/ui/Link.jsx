import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    font-weight: 300;
    padding: 0.2rem 0.5rem;
  `,
  medium: css`
    font-size: 1.5rem;
    font-weight: 400;
    padding: 0.4rem 0.7rem;
  `,
  large: css`
    font-size: 1.8rem;
    font-weight: 500;
    padding: 0.4rem 0.7rem;
  `,
};

const variations = {
  underlined: css`
    text-decoration: underline;
    color: var(--color-indigo-700);

    &:hover {
      transform: translateY(0.3);
    }
  `,
  button: css``,
  boxy: css`
    color: var(--color-indigo-700);
  `,
  iconified: css`
    background-color: transparent;
    display: flex;
    align-items: center;

    &:hover > svg {
      transform: scale(1.05);
      & .x {
        color: var(--color-indigo-50);
        height: 2rem;
        width: auto;
      }
    }
  `,
};

const StyledLink = styled(Link)`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  width: fit-content;

  &:focus,
  &:active,
  &:visited {
    color: var(--color-indigo-50);
  }

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

export default StyledLink;
