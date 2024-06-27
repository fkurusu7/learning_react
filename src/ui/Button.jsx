import styled, { css } from "styled-components";

const sizes = {
  medium: css`
    font-size: 1.4rem;
    min-width: 7rem;
    padding: 0.6rem 1.7rem;
  `,
  large: css`
    font-size: 1.6rem;
    min-width: 10rem;
    padding: 0.8rem, 2.4rem;
  `,
};

const variations = {
  iconified: css`
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    color: var(--color-indigo-200);
    height: fit-content;
    width: fit-content;

    & > svg {
      height: 2.3rem;
      width: auto;

      &:hover {
        transform: scale(1.05);
        color: var(--color-indigo-950);
      }
    }
  `,
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  font-weight: 500;
  text-align: center;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}

  &:active,
  &:focus {
    outline: none;
  }
`;

StyledButton.defaultProps = {
  size: "medium",
  variation: "iconified",
};

export default StyledButton;
