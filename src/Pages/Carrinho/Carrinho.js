import axios from "axios";
import React from "react";
import baseUrl from "../../constants/baseUrl";
import header from "../../constants/header";
import { Main, Containers, Contract, Contracts, Buttons } from './styled'

class Carrinho extends React.Component {
    contratar = () => {
        this.props.cart.forEach(job => {
                axios.post(`${baseUrl}/jobs/${job.id}`, {
                    taken: true
                }, header).then((res) => {
                    console.log("Foi")
                    this.props.removerCart(job.id)
                }).catch(() => {
                    alert("Não foi possivel contratar esses serviços")
                })
            }
        )
    }
    render() {
        let total = 0

        return (

            <Main>
                <h1>
                    Confirmar Contratações
                </h1>


                <Containers>
                    {
                        this.props.cart.length ?
                            <>
                                <Contracts>
                                    {this.props.cart.map(item => {
                                        total += item.price
                                        return (<Contract>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <h3>Descrição: {item.description}</h3>
                                                <h3>Forma de Pagamento: {item.paymentMethods}</h3>
                                                <h3>Preço: R$ {item.price},00</h3>
                                            </div>
                                            <button
                                                onClick={() => this.props.removerCart(item.id)}
                                            >Remover</button>
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
                            <h2></h2>
                    }
                    <Buttons>
                        {Boolean(this.props.cart.length) && <button onClick={this.contratar}>Finalizar compras</button>}
                        <button onClick={this.props.goToCatalogoPage}>Retornar</button>
                    </Buttons>
                </Containers>

            </Main>

        )
    }
}



export default Carrinho