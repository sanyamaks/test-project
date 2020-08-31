import React, {Component, PureComponent} from 'react';
import './List.css'
import ListItem from "../ListItem/ListItem.js";

class List extends Component {
    // В данном случае, если PureComponent, то перересовка непроисходит вообще при добавлении пунктов
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props
    }

    render() {
        console.log('List');
        console.log(this.props.data);
        return (
            <div className='list'>
                <h2 className='list__title'>Перечень задач</h2>
                <ul className='list__list-container'>
                    {this.props.data.map((message) => {
                        return (<ListItem text={message.title} key={message.id}/>)
                    })}
                </ul>
            </div>
        )
    }
}

export default List;