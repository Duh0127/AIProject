import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.body};
  margin-bottom: 6px;
  font-weight: 600;
`;

export const InputField = styled.input`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border.transparent};
  border-radius: 8px;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  color: ${({ theme }) => theme.colors.text.body};
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.field};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.border.transparent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
    opacity: 0.6;
  }
`;
