
import React, { Component } from 'react';
import axios from 'axios';
import baseUrl from './constants/baseUrl.js';
import header from './constants/header.js';
import {} from './style.js';
import logo from './assets/img/labeninjas-logo.png';
import icon from './assets/img/labeninjas-Icon.png';
import styled from 'styled-components';
import CadastrarJob from './components/CadastrarJob';
import JobCatalogPage from './Pages/JobCatalogPage/JobCatalogPage.js';
import Home from './Pages/Home/Home.js';


/* 
páginas:
home
cadastro-job
job-catalog
carrinho
*/

class App extends Component {

	state = {
		jobsList: [],
		currentPage: 'home',
		inputTitulo: "",
		inputDescricao: "",
		inputPreco: "",
		inputPagamento: [],
		inputData: ""

	};

	componentDidMount = () => {
		if (this.state.currentPage === 'job-catalog') {
			this.getJobsList();
		}
	};

	getJobsList = async () => {
		
		try {
			const response = await axios.get(`${baseUrl}/jobs`, header);

			console.log(response.data.jobs);
			this.setState({jobsList: response.data.jobs});
		}
		catch(err) {
			console.log(err.response)
		};
	};
	goToCatalogPage = () => {
		this.setState({currentPage: 'job-catalog'});
	};
	goToCadastroJobPage = () => {
		this.setState({currentPage: 'cadastro-job'});
	};
	goToCarrinhoPage = () => {
		this.setState({currentPage: 'carrinho'});
	};
	goToHomePage = () => {
		this.setState({currentPage: 'home'});
	};
	onChangeTitulo = (event) => {
		this.setState({ inputTitulo: event.target.value });
	};
	OnChangeDescricao = (event) => {
		this.setState({ inputDescricao: event.target.value });
	};
	OnChangePreco = (event) => {
		this.setState({ inputPreco: event.target.value });
	};
	OnChangePagamento = (event) => {
		this.setState({ inputPagamento: event.target.value });
	};
	OnChangeData = (event) => {
		this.setState({ inputData: event.target.value });
	};

	

	createJob=()=>{
		const body ={
		"title":this.state.inputTitulo,
		"description":this.state.inputDescricao,
		"price":this.state.inputPreco,
		"paymentMethods":this.state.inputPagamento,
		"dueDate":this.state.inputData
		};
		axios.post(`${baseUrl}/jobs`,body,header)
		.then((res)=>{console.log(res)})
		.catch((err)=>{console.log(err.response)})

	}; 	
	render() {

		switch (this.state.currentPage) {
			case 'home' :	
				return (
					<div>
					<Home
					goToCatalogPage={this.goToCatalogPage}
	                goToCadastroJobPage={this.goToCadastroJobPage}
					
					/>
					
					</div>
				);

			case 'job-catalog':
				return	(
					<JobCatalogPage
					goToHomePage={this.goToHomePage}
					goToCarrinhoPage={this.goToCarrinhoPage}
					/>
				);

			case 'cadastro-job':
				return( 
				<CadastrarJob 
				createJob={this.createJob}
				onChangeTitulo={this.onChangeTitulo}
				OnChangeDescricao={this.OnChangeDescricao}
				OnChangePreco={this.OnChangePreco}
				OnChangePagamento={this.OnChangePagamento}
				OnChangeData={this.OnChangeData}
				inputTitulo={this.state.inputTitulo}
				inputDescricao={this.state.inputDescricao}
				inputPreco={this.state.inputPreco}
				inputPagamento={this.state.inputPagamento}
				inputData={this.state.inputData}
				/>);
				
				
			case 'carrinho':
				return 'num tem ainda';

			default:
				return <h2>Página não encontrada</h2>;
				
		}
		
	};
};

export default App;

