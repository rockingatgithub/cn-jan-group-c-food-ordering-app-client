import Cookies from 'js-cookie';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUserProfile, setCounter, setUser } from '../actions';
import ChatApp from './ChatApp';
import Login from './Login';
import Profile from './Profile';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userType: 'customer'
    }
  }

  componentDidMount = async () => {
      this.props.dispatch(fetchUserProfile())
    }

  userTypeHandler = (event) => {
    this.setState({
      userType: event.target.value
    })
  }


  render() {

    console.log("is logged in", this.state.isLoggedIn)
    console.log("The store data", this.props.main)


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

        { this.props.main.isLoggedIn  ? <Profile user={this.props.main.user} /> :
          <>
            <div> 
              Login Type:-  
              Customer: <input type="radio" name="user-type" value='customer' onChange={this.userTypeHandler}  />
              Client: <input type="radio" name="user-type" value='client' onChange={this.userTypeHandler}  />
            </div>
            Signup:-<Login type='signup'  userType={this.state.userType}  />
            Signin:- <Login type='signin' userType={this.state.userType}  />
          </>
        }

        <ChatApp/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
     main: state
   }
}

export default  connect(mapStateToProps)(App) ;

