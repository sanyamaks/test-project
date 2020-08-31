import React, {Component} from 'react';
import './App.css';
import ClassExample from "./Components/ClassExample/ClassExample.js";
import FunctionExample from "./Components/FunctionExample/FunctionExample.js";

class App extends Component {
    render() {
        console.log('App');
        return (
            <div className="App">
                <ClassExample/>
                <FunctionExample/>
            </div>
        );
    }
}

export default App;
