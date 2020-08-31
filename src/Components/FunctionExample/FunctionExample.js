import React, {useEffect, useState} from 'react';
import './FunctionExample.css';
import FuncList from "../FuncList/FuncList.js";
import Button from "../Button/Button.js";

function FunctionExample() {

    const dataMessages = [
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
    ];

    const [messages, setMessages] = useState(dataMessages)

    const addMessage = () => {
        console.log('AddMessage');
        const id = setNewId();
        // const newMessages = messages;
        // newMessages.push({title: `text${id}`, id: id})
        // setMessages(newMessages);
        setMessages([...messages, {title: `text${id}`, id: id}]);
    }

    const checkLastId = () => {
        if (messages.length === 0) {
            return 0;
        }
        return messages[messages.length - 1].id;
    }

    const setNewId = () => checkLastId() + 1;


    return (
        <div className="func-list">
            <FuncList data={messages}/>
            <Button handleClick={addMessage}/>
        </div>
    );
}

export default FunctionExample;
