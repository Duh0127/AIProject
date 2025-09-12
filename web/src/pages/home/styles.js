import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: radial-gradient(
        circle at top left,
        #0a0f1f 30%,
        #050a19 100%
    );
    color: #fff;
`;

export const Content = styled.div`
    text-align: center;
    max-width: 600px;
    padding: 24px;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 16px;
`;

export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 32px;
    color: #bbb;
`;

export const Button = styled.button`
    background-color: #3d7bcc;
    border: none;
    padding: 14px 32px;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
        background-color: #2b5c99;
    }
`;
