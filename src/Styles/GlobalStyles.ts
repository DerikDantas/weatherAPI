import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserat', sans-serif;
    }
    body{
        background: linear-gradient(to top, #1C155D, #3537B7);
    }
    div#root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
`;