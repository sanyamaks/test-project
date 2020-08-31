import React, {Component, PureComponent} from 'react';
import './Button.css'

class Button extends Component {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return false
    // }

    handleClick = (event) => {
        event.preventDefault();
        this.props.handleClick();
    }

    render() {
        console.log('Button');
        return (
            <button className='button' onClick={this.handleClick}>+</button>
        )
    }
}

export default Button;