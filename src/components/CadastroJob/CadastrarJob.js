import axios from "axios";
import React from "react";
import styled from "styled-components";
import baseUrl from "../../constants/baseUrl";
import header from "../../constants/header";

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

const formInicial = {
  inputTitulo: "",
  inputDescricao: "",
  inputPreco: "",
  inputPagamento: [],
  inputData: ""
}
export default class CadastrarJob extends React.Component {

  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: "",
    inputData: "",

    checkboxBoleto: false,
    checkboxCartaodeCredito: false,
    checkboxCartaodeDebito: false,
    checkboxPix: false,
    checkboxPayPal: false,

  };

  onChangeBoleto = () => {
    this.setState({ checkboxBoleto: !this.state.checkboxBoleto })
  }

  onChangeCartaodeCredito = () => {
    this.setState({ checkboxCartaodeCredito: !this.state.checkboxCartaodeCredito })
  }

  onChangeCartaodeDebito = () => {
    this.setState({ checkboxCartaodeDebito: !this.state.checkboxCartaodeDebito })
  }

  onChangePix = () => {
    this.setState({ checkboxPix: !this.state.checkboxPix })
  }

  onChangePayPal = () => {
    this.setState({ checkboxPayPal: !this.state.checkboxPayPal })
  }

  onChangeTitulo = (event) => {
    this.setState({ inputTitulo: event.target.value });
  };
  onChangeDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };
  onChangePreco = (event) => {
    this.setState({ inputPreco: event.target.value });
  };
  onChangePagamento = (event) => {
    this.setState({ inputPagamento: event.target.value });
  };
  onChangeData = (event) => {
    this.setState({ inputData: event.target.value });
  };

  createJob = () => {
    const pagamentos = []
    if (this.state.checkboxBoleto)
      pagamentos.push("Boleto")

    if (this.state.checkboxCartaodeCredito)
    pagamentos.push("Cartao de Crédito")

    if (this.state.checkboxCartaodeDebito)
    pagamentos.push("Cartao de Débito")
  
    if (this.state.checkboxPix)
    pagamentos.push("Pix")

    if (this.state.checkboxPayPal)
    pagamentos.push("PayPal")


    const body = {
      "title": this.state.inputTitulo,
      "description": this.state.inputDescricao,
      "price": Number(this.state.inputPreco),
      "paymentMethods":pagamentos,
      "dueDate": this.state.inputData
    };
    axios.post(`${baseUrl}/jobs`, body, header)
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err.response) })

    this.setState({ ...this.state, formInicial });

  };
  render() {
    return (
      <Div>
        <Container>
          <h1>Cadastrar Job</h1>
          <input
            value={this.state.inputTitulo}
            placeholder={"Titulo"}
            onChange={this.onChangeTitulo}
          />
          <input
            value={this.state.inputDescricao}
            placeholder={"Descrição"}
            onChange={this.onChangeDescricao}
          />
          <input
            value={this.state.inputPreco}
            type="text"
            placeholder={"Preço"}
            onChange={this.onChangePreco}
          />
          <h5>Forma de Pagamento</h5>

          <div>
            <input
              type="checkbox"
              id="cartao-de-credito"
              name="cartao-de-credito"
              value={"Cartão de crédito"}
              onChange={this.onChangeCartaodeCredito}
            />
            <label for="cartao-de-credito">Cartão de crédito</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="cartao-de-debito"
              name="cartao-de-debito"
              value={"Cartão de débito"}
              onChange={this.onChangeCartaodeDebito}
            />
            <label for="cartao-de-debito">Cartão de débito</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="payPal"
              name="payPal"
              value={"PayPal"}
              onChange={this.onChangePayPal}
            />
            <label for="payPal">PayPal</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="boleto"
              name="boleto"
              value={"Boleto"}
              onChange={this.onChangeBoleto}

            />
            <label for="boleto">Boleto</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="pix"
              name="pix"
              value={"Pix"}
              onChange={this.onChangePix}

            />
            <label for="pix">Pix</label>
          </div>

          <input
            value={this.state.inputData}
            type="date"
            onChange={this.onChangeData}
          />
          <button onClick={this.createJob} type="button">Cadastrar Serviço</button>
        </Container>
      </Div>
    );
  }
}
