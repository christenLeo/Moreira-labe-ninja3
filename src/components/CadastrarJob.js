import React from "react";
import styled from "styled-components";

const OrganizarInput = styled.div`
margin-top: 50px;
display:flex;
flex-direction:column;
justify-content:center;
width: 300px;
margin-left:500px;
background-color:yellow;


h5{
  text-align:center;
}
h1{
  text-align:center;
}
div{
  display:flex;
  justify-content:center;
}

button{
  text-align:center;
  margin:10px;
  width: 150px;
 }
 input{
   margin: 5px;
 }
 select{
   margin:5px;
 }
 `


export default class CadastrarJob extends React.Component {
  
  

  render() {
    return (
      <OrganizarInput>
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
          <option value="Paypal">Paypal</option>
          <option value="Debito">Débito</option>
          <option valeu="Boleto">Boleto</option>
          <option value ="Pix">Pix</option>
        </select>
        
        <input
          value={this.props.inputData}
          type="date"
          onChange={this.props.OnChangeData}
        />
        <button onClick={this.props.createJob} type="button">Cadastrar Serviço</button>
      </OrganizarInput>
    );
  }
}
