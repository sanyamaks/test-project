import React, {Component, PureComponent} from 'react';
import './ListItemAnother.css'

function ListItemAnother(props) {
        const { text } = props
        console.log('ListItem', text);
        return (
            <li className='list__list-item'>
                {text}
            </li>
        )
}

export default React.memo(ListItemAnother);