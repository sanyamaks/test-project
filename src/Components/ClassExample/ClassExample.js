import React, {Component} from 'react';
import './ClassExample.css';
import List from "../List/List.js";
import Button from "../Button/Button.js";

class ClassExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    title: 'text1',
                    id: 1,
                },
                {
                    title: 'text2',
                    id: 2,
                },
                {
                    title: 'text3',
                    id: 3,
                },
            ],
        }
    }

    addMessage = () => {
        console.log('AddMessage');
        const id = this.getNewId();
        this.setState({messages: [...this.state.messages, {title: `text${id}`, id: id}]});
        console.log(this.state.messages);
    }

    getLastId = () => {
        const messages = this.state.messages
        if (messages.length === 0) {
            return 0;
        }
        return messages[messages.length - 1].id;
    }

    getNewId = () => {
        return this.getLastId() + 1;
    }

    render() {
        return (
            <div className="class-list">
                <List data={this.state.messages}/>
                <Button handleClick={this.addMessage}/>
            </div>
        );
    }
}

export default ClassExample;
