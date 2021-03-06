import * as React from 'react';

import './scss/app';

/* CLASS REACT EXAMPLE */
export default class App extends React.Component<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props);
		this.state = { name: null };
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;
