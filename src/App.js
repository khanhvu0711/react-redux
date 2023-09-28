import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ClassComponent from './component/ClassComponent';
import MyComponent from './component/MyComponent';

function App() {
    const [value, setValue] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    <ClassComponent />
                    <MyComponent />
                </p>
                <div>Count = {value}</div>
                <button onClick={() => setValue(value + 1)}>Increase</button>
                <button onClick={() => setValue(value - 1)}>Decrease</button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
