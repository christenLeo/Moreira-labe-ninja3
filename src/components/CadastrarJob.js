import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 47vh;
`;
const Container = styled.div`
  /* margin: 50px auto; */
  /* display:flex;
  flex-direction:column;
  justify-content:center; */
  /* width: 300px;
  margin-left:500px;
  background-color:yellow; */

  margin: 50px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 250px;
`;


export default class CadastrarJob extends React.Component {
  render() {
    return (
      <Div>
      <Container>
        <h1>Cadastrar Job</h1>
        <input
          value={this.props.inputTitulo}
          placeholder={"Titulo"}
          onChange={this.props.onChangeTitulo}
        />
        <input
          value={this.props.inputDescricao}
          placeholder={"Descrição"}
          onChange={this.props.OnChangeDescricao}
        />
        <input
          value={this.props.inputPreco}
          type="text"
          placeholder={"Preço"}
          onChange={this.props.OnChangePreco}
        />
        <h5>Forma de Pagamento</h5>
        <select value={this.props.inputPagamento} onChange={this.props.OnChangePagamento}>
          <option value="cartao de credito">Cartão de crédito</option>
          <option value="PP">Paypal</option>
          <option value="DBT">Débito</option>
          <option valeu="BOL">Boleto</option>
          <option value ="PIX">Pix</option>
        </select>
        
        <input
          value={this.props.inputData}
          type="date"
          onChange={this.props.OnChangeData}
        />
        <button onClick={this.props.createJob} type="button">Cadastrar Serviço</button>
      </Container>
      </Div>
    );
  }
}
