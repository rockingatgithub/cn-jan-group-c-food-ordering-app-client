import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  loginHandler = (user) => {
    this.setState({
      isLoggedIn: true,
      user: user
    })
  }
  

  render() {

    console.log("is logged in", this.state.isLoggedIn)

    return (
      <div>
      
      <h1>Food Ordering App</h1>

      {this.state.isLoggedIn ? <Profile user={this.state.user}  />   : 
      <>
        <Login type='signup' loginHandler={this.loginHandler} />
        <Login type='signin' loginHandler={this.loginHandler} />
      </>
      }

    </div>
    );
  }
}

export default App;