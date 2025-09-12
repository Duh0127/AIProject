import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100dvh;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px dashed ${({ theme }) => theme.colors.border.primary};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.border.transparent};
  color: ${({ theme }) => theme.colors.text.body};

  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: ${({ $hasMessage }) => !$hasMessage && "center"};
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
`;
