// https://reactjs.org/docs/add-react-to-a-website.html
// https://reactjs.org/docs/react-without-jsx.html

'use strict';

const e = React.createElement;

/***************** Without ES6 and without JSX  ************************/
const Greeting = React.createClass({
	render: function() {
		return e(
			'h1',
			null,
			'Hello World!!!'
		);
	}
});

const domContainer = document.getElementById('app');
ReactDOM.render(e(Greeting), domContainer);

/***************** With ES6 and without JSX  ************************/
// class Greeting extends React.Component {

// 	handleChange() {
// 		console.log('You clicked me!!!');
// 	}

// 	render() {
// 		const greet = 'Good morning!!!';
// 		return e(
// 			'h1', // component
// 			{ onClick: this.handleChange.bind(this) }, // props
// 			`Hello, ${greet}` // ...children
// 		)
// 	}
// }

// const domContainer = document.getElementById('app');
// ReactDOM.render(e(Greeting), domContainer);


/***************** With ES6 and JSX  ************************/
// class Greeting extends React.Component {

// 	handleChange() {
// 		console.log('You clicked me!!!');
// 	}

// 	render() {
// 		const greet = 'Good morning!!!';
// 		return (
// 			<h1 onClick={this.handleChange.bind(this)}>
// 				Hello, {greet}
// 			</h1>
// 		)
// 	}
// }

// const domContainer = document.getElementById('app');
// ReactDOM.render(<Greeting />, domContainer);
