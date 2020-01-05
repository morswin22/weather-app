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
      width: 100vw;
      height: 100vh;
      font-family: 'Lato', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export default GlobalStyle;