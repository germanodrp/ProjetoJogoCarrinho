import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

:root{
  --background: #6495ED;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

//font size padrao para desktop = 16px
    html{
        @media (max-width: 100px){
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }
//REM = 1rem = 16px

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  z-index: 1;
}

`
