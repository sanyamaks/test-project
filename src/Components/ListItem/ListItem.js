import React, {Component, PureComponent} from 'react';
import './ListItem.css'

class ListItem extends PureComponent {
    // В данном случае, если PureComponent, то не меняющийся компонент не перересовывается
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return false
    // }

    render () {
        const { text } = this.props
        console.log('ListItem', text);
        return (
            <li className='list__list-item'>
                {text}
            </li>
        )
    }
}

export default ListItem;