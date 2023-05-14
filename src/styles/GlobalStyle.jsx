import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    min-height: 100%;
  }

  #root {
    min-height: 100%;
    --color-blue-1: #EEF1FF;
    --color-blue-2: #D2DAFF;
    --color-blue-3: #AAC4FF;
    --color-blue-4: #B1B2FF;
  }

  html {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
