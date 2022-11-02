import Cookies from 'js-cookie';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatApp from './ChatApp';
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


  componentDidMount = async () => {

    const userToken = Cookies.get('token')

    if (userToken) {

      let res = await fetch(`http://localhost:8000/customer/createSession`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })

      let parsedRes = await res.json()

      this.loginHandler(parsedRes.user)

    }

  }

  componentDidUpdate = () => {



  }


  render() {

    console.log("is logged in", this.state.isLoggedIn)

    return (
      <div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />

        <h1>Food Ordering App</h1>

        {this.state.isLoggedIn ? <Profile user={this.state.user} /> :
          <>
            <Login type='signup' loginHandler={this.loginHandler} />
            <Login type='signin' loginHandler={this.loginHandler} />
          </>
        }

        <ChatApp/>

      </div>
    );
  }
}

export default App;