import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

// Why should I place the BrowserRouter in RenderDOM.render() ?
// What is Switch, exact ?
// Change route from methods in component
// Active route

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul className="nav-bar">
            {/* <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li> */}
            <li><NavLink to='/home/12345' className='nav-link' activeClassName="active-menu" title="My home page">Home</NavLink></li>
            <li><NavLink to='/about' className='nav-link' activeClassName="active-menu">About</NavLink></li>
            <li><NavLink to='/contact-us' className='nav-link' activeClassName="active-menu">Contact Us</NavLink></li>
          </ul>
        </header>
        <section>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
        </section>
      </div>
    );
  }
}

export default App;
