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

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TextAreaField = styled.textarea`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border.transparent};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.body};
  outline: none;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
  min-height: 40px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.field};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border.field};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
    opacity: 0.6;
  }
`;

export const CharCounter = styled.span`
  position: absolute;
  bottom: 6px;
  right: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme, $isOverLimit }) =>
    $isOverLimit ? theme.colors.status.dangerAlt : theme.colors.text.placeholder};
`;
