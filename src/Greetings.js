import React, { Component } from 'react';

/*************** Functional component  *******************/
const Greetings = props => <h1>Hello, { props.name }</h1>;
// const Greetings = ({name, age}) => <h1>Hello, { name } - { age }</h1>;
// const Greetings = ({name = 'a', age}) => <h1>Hello, { name } - { age }</h1>;

// Impure component
// const Greetings = ({name, age}) => {
//   const convertToUpperCase = (n) => {
//     return n.toUpperCase();
//   };
//   return <h1>Hello, { convertToUpperCase(name) }, { age }</h1>;
// };

/*************** Class component  *******************/
// class Greetings extends Component {
//   render() {
//     return <h1>Hello, { this.props.name }</h1>;
//   }
// }

export default Greetings;
