import React from 'react';
import './index.css';

// conditional rendering
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
  
  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      }
    }
  
    handleLoginClick() {
      this.setState({
        isLoggedIn: true
      });
    }
  
    handleLogoutClick() {
      this.setState({
        isLoggedIn: false
      });
    }
  
    render() {
      let button;
      // use variable
      if (this.state.isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick.bind(this)}/>
      } else {
        button = <LoginButton onClick={this.handleLoginClick.bind(this)}/>
      }
  
      return (
        <div>
          { // inline if
            this.state.isLoggedIn &&
            <h1>Welcome, you ared logged in</h1>
          }
          {button}
          { // inline ternary operator
            this.state.isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick.bind(this)}/>
            : <LoginButton onClick={this.handleLoginClick.bind(this)}/>
          }
        </div>
      );
    }
  }
  
  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
    return (
      <div className='warning'>
        Warning
      </div>
    );
  }

export {LoginControl, WarningBanner};