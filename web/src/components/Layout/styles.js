import styled from "styled-components";

export const LayoutContainer = styled.div`
    background-image: radial-gradient(
        circle farthest-corner at -5.6% -6.8%,
        rgba(10, 15, 31, 1) 35%,   /* Azul bem escuro (base) */
        rgba(5, 10, 25, 1) 75%     /* Azul quase preto */
    );
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Main = styled.main`
    height: calc(100vh - 100px);
`