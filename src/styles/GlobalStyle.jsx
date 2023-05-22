import { createGlobalStyle } from "styled-components";
import colors from "~/src/styles/colors";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'omyu_pretty';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MBC1961GulimM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/MBC1961GulimM.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}


body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    min-height: 100%;
    background-color: ${colors.blue[4]};
    font-family: 'omyu_pretty';
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
