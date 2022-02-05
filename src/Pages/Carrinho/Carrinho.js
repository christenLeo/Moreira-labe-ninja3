import React from "react";
import {Main, Containers, Contract, Contracts, Buttons} from './styled'
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