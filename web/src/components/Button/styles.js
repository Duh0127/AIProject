import styled, { css } from "styled-components";

function getVariantStyles(variant, theme) {
    switch (variant) {
        case "primary":
            return css`
        background: ${theme.colors.border.secondary};
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.border.tertiary};

        &:hover:not(:disabled) {
          background: ${theme.colors.border.tertiary};
        }
      `;
        case "secondary":
            return css`
        background: ${theme.colors.background.secondary};
        color: ${theme.colors.text.secondary};
        border: 1px solid ${theme.colors.border.secondary};

        &:hover:not(:disabled) {
          background: ${theme.colors.background.tertiary};
        }
      `;
        case "outline":
            return css`
        background: transparent;
        color: ${theme.colors.text.tertiary};
        border: 1px solid ${theme.colors.border.divider};

        &:hover:not(:disabled) {
          background: ${theme.colors.background.tertiary};
        }
      `;
        case "danger":
            return css`
        background: ${theme.colors.status.danger};
        color: #fff;
        border: 1px solid ${theme.colors.status.dangerAlt};

        &:hover:not(:disabled) {
          background: ${theme.colors.status.dangerAlt};
        }
      `;
        case "link":
            return css`
        background: transparent;
        border: none;
        padding: 0;
        color: ${theme.colors.text.tertiary};
        text-decoration: underline;
        font-weight: 500;

        &:hover:not(:disabled) {
          color: ${theme.colors.text.primary};
        }
      `;
        default:
            return css`
        background: ${theme.colors.background.tertiary};
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.border.primary};

        &:hover:not(:disabled) {
          background: ${theme.colors.border.primary};
        }
      `;
    }
}

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 6px 12px;
  gap: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  ${({ $variant, theme }) => getVariantStyles($variant, theme)}

  &:disabled,
  &[aria-disabled="true"] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
