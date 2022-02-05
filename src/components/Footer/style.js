import styled from "styled-components";

export const Foot = styled.footer`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-family: sans-serif;
    width: 100vw;

    img{
        width: 150px;
        margin-top: 15px;
    }
    div{
        display: flex;
        flex-direction: column;
        text-align: right;
        margin: 0 30px 0 0;
    }
`;