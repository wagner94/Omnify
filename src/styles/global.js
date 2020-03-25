import  { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `
@import url();

*{

    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

html,body, #root{
    height: 100%;
}

body{
    font:  14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
}

ul{
    list-style: none;
}`;

