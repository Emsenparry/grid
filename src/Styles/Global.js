import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        border: solid 1px red;
        margin: 0;
        padding: 0;
    }
    body, html{
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.onBackground};
    }
    #root{
        width: 100%;
        min-height: 100%;
        display: grid;
        grid-template-rows: auto auto 1fr auto;
        gap: 1rem;
    }

    h1{
        font-weight: 900;
        color: pink;
    }


`