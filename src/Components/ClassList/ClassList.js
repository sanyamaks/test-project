import React, {Component} from 'react';
import './ClassList.css';
import List from "../List/List.js";
import Button from "../Button/Button.js";

class ClassList extends Component {
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
        const id = this.setNewId();
        const newMessages = this.state.messages;
        newMessages.push({title: `text${id}`, id: id})
        this.setState({messages: newMessages});
        console.log(this.state.messages);
    }

    checkLastId = () => {
        const messages = this.state.messages
        if (messages.length === 0) {
            return 0;
        }
        return messages[messages.length - 1].id;
    }

    setNewId = () => {
        return this.checkLastId() + 1;
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

export default ClassList;
