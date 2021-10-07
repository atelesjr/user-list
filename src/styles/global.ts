import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    html, #root {
        box-sizing: border-box;
        font-size: 65.5%; /*1rem = 10px, 10/16px = 62.5% */
        line-height: 1.15; 
        -webkit-text-size-adjust: 100%; 
        
    }

    body{
        margin: 0;
        font-family:'Roboto', sans-serif;
        font-size: 1.4rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.93px;
        color: #101820;

        background-color: #f3f3f3;
        min-height: 100vh;
        overflow: hidden;
    }
`