import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  /* Container do input */
  .custom-select__control {
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border.transparent};
    min-height: 40px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    transition: border-color 0.2s;

    &:hover {
      border-color: ${({ theme }) => theme.colors.border.field};
    }
  }

  /* Foco */
  .custom-select__control--is-focused {
    border-color: ${({ theme }) => theme.colors.border.field};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2); 
  }

  /* Container de valores (tags ou single value) */
  .custom-select__value-container {
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.body};
  }

  /* Valor selecionado quando isMulti=false */
  .custom-select__single-value {
    color: ${({ theme }) => theme.colors.text.body};
  }

  /* Tags (isMulti=true) */
  .custom-select__multi-value {
    background-color: ${({ theme }) => theme.colors.background.tertiary};
  }

  .custom-select__multi-value__label {
    color: ${({ theme }) => theme.colors.text.body};
  }

  .custom-select__multi-value__remove {
    color: ${({ theme }) => theme.colors.text.body};

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.body};
    }
  }

  .custom-select__menu {
    border-radius: 6px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.body};
  }

  .custom-select__option {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.body};

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.tertiary};
    }

    &--is-selected {
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.body};
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.body};
  margin-bottom: 6px;
  font-weight: 600;
`;
