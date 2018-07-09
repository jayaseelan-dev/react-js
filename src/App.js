import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    // <React.Fragment> </React.Fragment> or <> ... </>
    // <div className='app-header'>
    // </div>
    return (
      <h1>Login</h1>
      <div>
        <label>Username</label>
        <input id='username' className='control-field' />
      </div>
      <div>
        <label>Password</label>
        <input id='password' className='control-field' />
      </div>
      <div>
        <input id='remember' className='control-field' 
              type='checkbox' />
        <label>Remember me in this system</label>
      </div>
      {/* <h4 dangerouslySetInnerHTML={ this.createMarkup() }/> */}
      <div>
        <button className='control-field'>Submit</button>
      </div>
    );
  }
}

export default App;
