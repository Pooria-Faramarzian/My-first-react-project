import React, { Component } from 'react';

import Person from './components/Person';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h2>Hello World</h2>
				<hr />
				<Person firstName='Pooria' lastName='Faramarzian' />
			</div>
		);
	}
}
export default App;