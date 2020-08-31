import React, {Component, PureComponent} from 'react';
import './FuncListItem.css'

function FuncListItem(props) {
        const { text } = props
        console.log('ListItem', text);
        return (
            <li className='list__list-item'>
                {text}
            </li>
        )
}

export default React.memo(FuncListItem);