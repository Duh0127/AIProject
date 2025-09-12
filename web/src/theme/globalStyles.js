import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  /* Barra de rolagem para WebKit (Chrome, Edge, Safari) */
  ::-webkit-scrollbar {
    width: 6px; /* largura da barra vertical */
    height: 6px; /* altura da barra horizontal */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* fundo da barra */
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2); /* cor do “thumb” */
    border-radius: 3px; /* bordas arredondadas */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.4); /* hover sutil */
  }

  /* Barra de rolagem para Firefox */
  * {
    scrollbar-width: thin;          /* fina */
    scrollbar-color: rgba(255,255,255,0.2) transparent; /* thumb e track */
  }
`;

export default GlobalStyles;
