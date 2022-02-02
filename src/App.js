import React, {Component} from 'react';
import axios from 'axios';
import baseUrl from './constants/baseUrl.js';
import header from './constants/header.js';
import logo from './assets/img/labeninjas-logo.png';
import icon from './assets/img/labeninjas-Icon.png';
import style, {} from './style.js';
import JobCatalogPage from './pages/JobCatalogPage/JobCatalogPage.js';

/* 
páginas:
home
cadastro-job
job-catalog
details
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
		
	render() {
		return (
			<div>
				<JobCatalogPage/>
			</div>
		);
	};
};

export default App;
