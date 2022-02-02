import React from 'react'
import { AppContainer } from './components/AppContainer'
import CadastrarJob from './components/CadastrarJob'





export default class App extends React.Component {
  render() {
	return <div>
		<AppContainer>
		<CadastrarJob />
		<CadastrarJob/>
		</AppContainer>
	</div>;
  }
}









        



