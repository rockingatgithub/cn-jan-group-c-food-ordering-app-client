import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { login } from '../actions';
import { connect } from 'react-redux';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.setIntervalId = ''
    }

    componentDidMount = () => {
       this.setIntervalId = setInterval(() => {
            console.log('started at mount')
          }, 1000);
    }

    componentDidUpdate = () => {
        console.log("component updated")
    }

    componentWillUnmount = () => {
        clearInterval(this.setIntervalId)
    }

    submitHandler = async (event) => {

        event.preventDefault()
        const { email, password, name } = this.state
        const { userType, type } = this.props
        const typeUser = userType === 'client' ? 'client' : 'customer'
        let user = {
            email,
            password,
        }
        if (typeUser === 'client') {
            user.name = name
        }
        this.props.dispatch(login(user, typeUser, type))
    }

    emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    passwordHandler = (event) => {

        this.setState({ password: event.target.value })

    }

    nameHandler = (event) => {

        this.setState({ name: event.target.value })

    }

    render() {
        return (
            <div>

                <form onSubmit={this.submitHandler} >

                    {this.props.userType === 'client' && <><label htmlFor='name'> Name:- </label> <input id='name' value={this.state.name} type='text' onChange={this.nameHandler} /></>}
                    <label htmlFor='email'  > Email:- </label>
                    <input id="email" value={this.state.email} type='email' onChange={this.emailHandler} />
                    <label htmlFor='password'  > Email:- </label>
                    <input id="password" value={this.state.password} type='password' onChange={this.passwordHandler} />

                    <button type='submit' > Submit </button>


                </form>

            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
      main: state
    }
 }
 
 export default  connect(mapStateToProps)(Login) ;