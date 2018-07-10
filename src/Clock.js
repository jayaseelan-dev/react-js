import React, { Component } from 'react';

class Clock extends React.Component {

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}

export default Clock;

// {/* <h2>String: {new Date().toDateString()}</h2> */}
// {/* <button onClick={this.tick}>Change time</button> */}

//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       this.tick.bind(this),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }