import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  border: ${({ size }) => Math.max(size / 8, 4)}px solid
    ${({ theme }) => theme.colors.background.secondary};
  border-top: ${({ size }) => Math.max(size / 8, 4)}px solid
    ${({ theme }) => theme.colors.text.body};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${spin} 1s linear infinite;
`;

export const Label = styled.span`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.body};
  text-align: center;
`;
