import styled from "styled-components"

export const Main = styled.main`
    text-align: center;
    background: rgba(91, 6, 50, 0.5);
    width: 100vw;
    margin-left: -0.45rem;
    height: 76vh;
    font-family: sans-serif;

    h2{
        font-size: 2rem;
        margin: 3.0rem auto;
        height: 5rem;
        width: 19rem;
        letter-spacing: 0.29rem;
        line-height: 1.2;
    }
    h3{
        margin: 5rem auto 3rem auto;
        width: 12rem;
    }
    img{
        width: 100vw;
    }
    div{
        display:flex;
        justify-content: center;
        overflow-x: hidden;
    }
    button{
        margin: 0 2rem;
        padding: 1rem;
        color: darkviolet;
        border: 1px solid darkviolet;
        font-weight: bold;
        background: cornsilk;
    }
    button:hover{
        background: darkviolet;
        color: cornsilk;
        cursor: pointer;
    }

    @media screen and (min-width: 1022px) {
        &{
            width: 80vw;
            margin-top: 5rem;
            margin-left: 20%;
            padding-top: 250px;
            box-sizing: border-box;
        }
        
        img{
            width: 80vw;
            position: absolute;
            left: 30px;
            top: 140px;
        }
        h2{
            width:fit-content;
            height:fit-content;
        }
        h3{
            width: 240px;
            font-size: 1.35rem;
        }
    }
    @media screen and (min-width: 1090px) {
        &{
            padding-top: 340px;
            height: 840px;
        }

        button{
            width: 250px;
            height: 70px;
            font-size: 1.5rem;
        }
        h3{
            width: 240px;
            font-size: 1.35rem;
        }
    }
    @media screen and (min-width: 1390px) {
        &{
            padding-top: 400px;
        }
        h3{
            width: 260px;
            font-size: 1.5rem;
        }
    }
`;