import React, { Component } from 'react';
import Cookies from 'js-cookie'


class Chat extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            emailBody: ''
        }
    }

    submitHandler =async  (event) => {

        event.preventDefault()

        let emailBody = {
            email: this.state.email,
            emailBody: this.state.emailBody
        }

        let res = await fetch(`http://localhost:8000/customer/sendMail`, {
            method: 'POST',
            body: JSON.stringify(emailBody),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })

        let parsedres = await res.json()

        console.log('The response', parsedres)


    } 

    emailHandler = (event) => {

        this.setState({email: event.target.value})

    }

    bodyHandler = (event) => {

        this.setState({emailBody: event.target.value})

    }
    

    render() {

        const {email, emailBody} = this.state

        return (
            <div>

                <form onSubmit={this.submitHandler} >

                    <input type="email" onChange={this.emailHandler} value={email} />
                    <textarea onChange={this.bodyHandler} value={emailBody} />

                    <button type='submit' > Send mail </button>


                </form>
                
            </div>
        );
    }
}

export default Chat;