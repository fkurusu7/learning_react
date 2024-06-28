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
  nosize: css`
    font-size: 1.8rem;
    font-weight: 700;
    height: 90%;
    padding: 0;
    width: 90%;
  `,
  largeicon: css`
    font-size: 1.8rem;
    font-weight: 500;
    padding: 0;
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
  simple: css`
    display: flex;
    justify-content: center;
    align-items: center;

    &,
    &:visited,
    &:focus,
    &:active {
      color: var(--color-indigo-100);
    }
  `,

  iconified: css`
    background-color: transparent;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      height: 2rem;
      color: var(--color-indigo-50);

      &.github {
        height: 2.7rem;
        margin-top: -0.2rem;
        width: auto;
      }
    }
    &:hover > svg {
      color: var(--color-indigo-300);
      transform: scale(1.05);
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

  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
`;

export default StyledLink;
