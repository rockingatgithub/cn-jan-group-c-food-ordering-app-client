import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = async (event) => {

        event.preventDefault()
        const { email, password } = this.state

        let user = {
            email,
            password
        }

        let res = await fetch(`http://localhost:8000/customer/${this.props.type}`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        let parsedRes = await res.json()

        if (parsedRes.message === 'Customer successfully Added!') {
            this.props.loginHandler(parsedRes.user)

            if (window) {
                document.cookie = 'token' + "=" + (parsedRes.token || "");
            }

        }


    }

    emailHandler = (event) => {

        this.setState({ email: event.target.value })

    }

    passwordHandler = (event) => {

        this.setState({ password: event.target.value })

    }



    componentDidUpdate = () => {


        toast(" User input Added! ", {
            type: "error"
        })
        console.log("Update called!")


    }

    componentWillUnmount = () => {

        console.log("Component unmount!")

    }


    render() {
        return (
            <div>

                

                <form onSubmit={this.submitHandler} >

                    <input value={this.state.email} type='email' onChange={this.emailHandler} />
                    <input value={this.state.password} type='password' onChange={this.passwordHandler} />

                    <button type='submit' > Submit </button>


                </form>

            </div>
        );
    }
}

export default Login;