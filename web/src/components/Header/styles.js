import styled from "styled-components";

export const Container = styled.header`
    background-color: #00000050;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 4px 48px;
`

export const Logo = styled.img`
    height: 100%;
    object-fit: contain;
    object-position: center;
`