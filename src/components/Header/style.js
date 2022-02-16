import styled from 'styled-components';

export const Head = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        width: 200px;
        margin: 1rem;
        cursor: pointer;
    }
    div{
        margin: 0.5rem 0.5rem 0 0.5rem;
        width: 100vw;
        padding-bottom: 1rem;
        border-bottom: 1px solid darkviolet; 
    }
    button{
        margin: 0.5rem;
        padding: 0.5rem;
        background: none;
        border: 1px solid ;
        text-transform: uppercase;
        color: darkviolet;
    }
    button:hover{
        background: darkviolet;
        color: cornsilk;
        cursor: pointer;
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