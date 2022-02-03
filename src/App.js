import React, {Component} from 'react';
import axios from 'axios';
import baseUrl from './constants/baseUrl.js';
import header from './constants/header.js';
import logo from './assets/img/labeninjas-logo.png';
import icon from './assets/img/labeninjas-Icon.png';
import style, {} from './style.js';
import Home from './pages/Home/Home.js'
import JobCatalogPage from './pages/JobCatalogPage/JobCatalogPage.js';

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
		currentPage: 'home'
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
		
	render() {

		switch (this.state.currentPage) {
			case 'home' :	
				return (
					<Home
					goToCatalogPage={this.goToCatalogPage}
					goToCadastroPage={this.goToCadastroPage}
					/>
				);

			case 'job-catalog':
				return	(
					<JobCatalogPage
					goToHomePage={this.goToHomePage}
					goToCarrinhoPage={this.goToCarrinhoPage}
					/>
				);

			case 'cadastro-job':
				return 'num tem ainda';
				
			case 'carrinho':
				return 'num tem ainda';

			default:
				return <h2>Página não encontrada</h2>;
		}
	};
};

export default App;
