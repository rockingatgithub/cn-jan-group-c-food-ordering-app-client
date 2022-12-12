import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFood } from '../actions';
import { ThemeContext } from './App';


class AddFood extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            price: 0,
        }
    }


    submitHandler = (event) => {

        event.preventDefault()
        const food = {
            name: this.state.name,
            price: this.state.price
        }
        this.props.dispatch(addFood(food))

    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onPriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.submitHandler} >

                    <input type="text" value={this.state.name} onChange={this.onNameChange}  />
                    <input type="text" value={this.state.price} onChange={this.onPriceChange}  />
                    <button type='submit' > Submit </button>


                </form>

                <ThemeContext.Consumer>{ value => (<div>The context value! {value}</div>) }</ThemeContext.Consumer>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        main: state,
    }
}

export default  connect(mapStateToProps)(AddFood);