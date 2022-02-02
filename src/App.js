import React, {Component} from 'react';
import axios from 'axios';
import baseUrl from './constants/baseUrl.js';
import header from './constants/header.js';
import logo from './assets/img/labeninjas-logo.png';
import icon from './assets/img/labeninjas-Icon.png';
import style, {} from './style.js';
import JobCatalogPage from './pages/JobCatalogPage/JobCatalogPage.js';

class App extends Component {

	state = {
		jobsList: [],
		currentPage: 'job-catalog'
	};

	componentDidMount = () => {
		if (this.state.currentPage === 'job-catalog') {
			return this.getJobsList();
		}
	};

	getJobsList = () => {};

	render() {
		return (
			<div>
				<JobCatalogPage/>
			</div>
		);
	};
};

export default App;
