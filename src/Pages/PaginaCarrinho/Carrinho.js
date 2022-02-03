import React from "react";
import styled from 'styled-components';


const Main = styled.div`
    padding: 1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    min-height: 100vh;
    h1{
        margin: 2rem 1rem;
        text-align: center;
        color: #494949;
    }
`
// roxo -> : #7867bf
const Containers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: #f5f4fc;
  width: 100%;
  max-width: 700px;
  padding: 1rem;
`
const Contracts = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`
const Contract = styled.div`
  border: 1px solid gray;
  width: 100%;
  padding: 20px;
  background-color:#FFFFFF;
  border:  #7867bf solid 2px;
  margin: 10px;
  padding: 20px;
    >div{  
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        
        h3{
            background-color: white;
            z-index: 1;
            color: #494949;
        }
    }
    button{
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        text-decoration: underline;
    }
`
const Buttons = styled.div`
    width: 100%;
    button{
        margin: 0 1.3rem 0 0 ;
        padding: 6px 15px;
        font-size: 1.2rem;
        cursor: pointer;
        background-color: white;
        color: #7867bf;
        font-weight: 700;
        border:  #7867bf solid 2px;
        :hover{
            background-color: #7867bf;
            color: white;
        }
    }
`
const produtoFalso = [
    {
        id: 1,
        name: "Serviço A",
        value: 300,

    },
    {
        id: 2,
        name: "Serviço B",
        value: 2070,

    },
    {
        id: 3,
        name: "Serviço C",
        value: 890,

    },
]
class Carrinho extends React.Component {

    render() {
        let total = 0

        return (

            <Main>
                <h1>
                    Contratações a Confirmar
                </h1>


                <Containers>
                    {
                        produtoFalso && produtoFalso.length ?
                            <>
                                <Contracts>
                                    {produtoFalso.map(item => {
                                        total += item.value
                                        return (<Contract>
                                            <div>
                                                <h3>{item.name}</h3>
                                                <h3>R$ {item.value},00</h3>
                                            </div>
                                            <button>Remover</button>
                                        </Contract>)
                                    })}

                                    <Contract>
                                        <div>
                                            <h3>Total</h3>
                                            <h3>R$ {total},00</h3>
                                        </div>
                                    </Contract>
                                </Contracts>

                            </> :
                            <h2>Carrinho Vazio</h2>
                    }
                    <Buttons>
                        <button>Finalizar compras</button>
                        <button>Retornar</button>
                    </Buttons>
                </Containers>

            </Main>

        )
    }
}



export default Carrinho