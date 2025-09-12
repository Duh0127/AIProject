import styled from "styled-components";

export const Container = styled.footer`
    background-color: #00000050;
    border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`