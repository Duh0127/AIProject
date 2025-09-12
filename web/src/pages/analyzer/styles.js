import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    padding: 40px;
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.background.secondary};
    display: flex;
    gap: 12px;
    width: 100%;
    border-radius: 24px;
`

export const SideBar = styled.form`
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    display: flex;
    flex: 4;
    max-width: 500px;
    flex-direction: column;
    border-radius: 16px 0 0 16px;
    padding: 18px 24px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
    border-radius: 0 16px 16px 0;
    border: 3px solid ${({ theme }) => theme.colors.border.transparent};
`