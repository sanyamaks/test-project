import React, {Component, PureComponent, useEffect} from 'react';
import './FuncList.css'
import ListItem from "../ListItemAnother/FuncListItem.js";

function FuncList(props) {
        console.log('List');
        console.log(props.data);
        return (
            <div className='list'>
                <h2 className='list__title'>Перечень задач</h2>
                <ul className='list__list-container'>
                    {props.data.map((message) => {
                        return (<ListItem text={message.title} key={message.id}/>)
                    })}
                </ul>
            </div>
        )
}

export default FuncList;