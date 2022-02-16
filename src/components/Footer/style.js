import styled from "styled-components";

export const Foot = styled.footer`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-family: sans-serif;
    width: 100vw;

    img{
        width: 120px;
        margin-top: 15px;
    }
    div{
        display: flex;
        flex-direction: column;
        text-align: right;
        margin: 0 30px 0 0;
    }

    @media screen and (min-width: 1022px) {
        &{
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid darkviolet;
        }
        div{
            border: none;
            text-align: right;
        }    
    }

`;