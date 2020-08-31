import React, {Component} from 'react';
import './App.css';
import ClassList from "./Components/ClassList/ClassList.js";
import FuncList from "./Components/FuncList/FuncList.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ClassList/>
                <FuncList/>
            </div>
        );
    }
}

export default App;
