
import React from 'react';
import { AppContainer } from './components/AppContainer';
import styled from 'styled-components';
import logo from './assets/img/labeninjas-logo.png';
import icon from './assets/img/labeninjas-Icon.png';
import CadastrarJob from './components/CadastrarJob'

class App extends React.Component {
	render() {
		return (
			<div>
				<CadastrarJob />
		        <CadastrarJob/>
			</div>
		);
	};
};

export default App;

