import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
    
    *, *::after, *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      font-family: 'Lato', sans-serif;
    }
`;

export default GlobalStyle;