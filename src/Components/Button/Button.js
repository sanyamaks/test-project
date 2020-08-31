import React, {Component, PureComponent} from 'react';
import './Button.css'

class Button extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return false
    // }

    handleClick = (event) => {
        event.preventDefault();
        this.props.handleClick();
    }

    render() {
        console.log('Button');
        console.log(this.props);
        return (
            <button className='button' onClick={this.handleClick}>+</button>
        )
    }
}

export default Button;