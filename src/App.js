
import React, { Component } from 'react';
import { Test } from './style.js';
import CadastrarJob from './components/CadastroJob/CadastrarJob';
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
		currentPage: 'job-catalog',
		cart: []
	};

	addCart = (job) => {
		this.setState({
			cart: [...this.state.cart, job]
		})
	}
	removerCart = (id) => {
		const newCart = this.state.cart.filter((job) => {
			return job.id !== id
		})
		this.setState({
			cart: newCart
		})
	}
	goToCatalogPage = () => {
		this.setState({ currentPage: 'job-catalog' });
	};
	goToCadastroJobPage = () => {
		this.setState({ currentPage: 'cadastro-job' });
	};
	goToCarrinhoPage = () => {
		this.setState({ currentPage: 'carrinho' });
	};
	goToHomePage = () => {
		this.setState({ currentPage: 'home' });
	};

	render() {

		switch (this.state.currentPage) {
			case 'home':
				return (
					<Test>
						<Header
							goToHomePage={this.goToHomePage}
							goToCatalogoPage={this.goToCatalogPage}
							goToCadastroPage={this.goToCadastroJobPage}
						/>
						<Home
							goToCatalogPage={this.goToCatalogPage}
							goToCadastroJobPage={this.goToCadastroJobPage}
						/>
						<Footer />
					</Test>
				);

			case 'job-catalog':
				return (
					<Test>
						<Header
							goToHomePage={this.goToHomePage}
							goToCatalogoPage={this.goToCatalogPage}
							goToCadastroPage={this.goToCadastroJobPage}
							goToCarrinhoPage={this.goToCarrinhoPage}
						/>
						<TalentosJob
							addCart={this.addCart}
							removerCart={this.removerCart}
							cart={this.state.cart}
						/>
						<Footer />
					</Test>
				);

			case 'cadastro-job':
				return (
					<Test>
						<Header
							goToHomePage={this.goToHomePage}
							goToCatalogoPage={this.goToCatalogPage}
							goToCadastroPage={this.goToCadastroJobPage}
						/>
						<CadastrarJob

						/>
						<Footer />
					</Test>
				);


			case 'carrinho':
				return (
					<Test>
						<Header
							goToHomePage={this.goToHomePage}
							goToCatalogoPage={this.goToCatalogPage}
							goToCadastroPage={this.goToCadastroJobPage}
						/>
						<Carrinho
							cart={this.state.cart}
							removerCart={this.removerCart}
							goToCatalogoPage={this.goToCatalogPage}
						/>
						<Footer />
					</Test>
				);

			default:
				return <h2>Página não encontrada</h2>;

		}

	};
};

export default App;

