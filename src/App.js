
import React, { Component } from 'react';
import axios from 'axios';
import baseUrl from './constants/baseUrl.js';
import header from './constants/header.js';
import {Test} from './style.js';
import CadastrarJob from './components/CadastrarJob.js';
import Home from './Pages/Home/Home.js';
import TalentosJob from "./Pages/TalentosJob/TalentosJob.js";
import Carrinho from './Pages/Carrinho/Carrinho.js'
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";


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

		this.setState({});

	}; 	
	render() {

		switch (this.state.currentPage) {
			case 'home' :	
				return (
					<Test>
						<Header
						goToCatalogPage={this.goToCatalogPage}
						goToCadastroPage={this.goToCadastroJobPage}
						/>
						<Home
						goToCatalogPage={this.goToCatalogPage}
						goToCadastroJobPage={this.goToCadastroJobPage}
						/>
						<Footer/>
					</Test>
				);

			case 'job-catalog':
				return	(
					<Test>
						<Header/>
						<TalentosJob
						goToHomePage={this.goToHomePage}
						goToCarrinhoPage={this.goToCarrinhoPage}
						/>
						<Footer/>
					</Test>
				);

			case 'cadastro-job':
				return(
					<Test> 
						<Header
						goToCatalogPage={this.goToCatalogPage}
						goToCadastroPage={this.goToCadastroJobPage}
						/>
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
						/>
						<Footer/>
					</Test>
				);
				
				
			case 'carrinho':
				return (
					<Test>
						<Header/>
						<Carrinho/>
						<Footer/>
					</Test>
				);

			default:
				return <h2>Página não encontrada</h2>;
				
		}
		
	};
};

export default App;

