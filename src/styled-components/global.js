import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body {
    background-color: #F5EDED;
    height: 100%;
}


html, body, #root {
      height: 100vh;
      background-color: #F5EDED;
  }

body {
    font-family: 'Poppins', Helvetica, sans-serif;
}

#root {
    display: flex;
    flex-direction: column;
}


`;