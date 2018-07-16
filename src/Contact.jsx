import React from 'react';

class Contact extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props.match, this.props.location, this.props.history);
	}

	navigateBack = (event) => {
		event.preventDefault();
		this.props.history.goBack();
	}

	navigateToAbout = (event, txt) => {
		console.log(txt, event);
		event.preventDefault();
		this.props.history.push('/about');
	}

	render() {
		return (
			<React.Fragment>
				<h1>Contact</h1>
				<a href="" onClick={this.navigateBack}>Go Back</a><br/>
				<a href="" onClick={(e) => this.navigateToAbout(e, 'test')}>Go To About</a>
			</React.Fragment>
		);
	}
}

export default Contact;