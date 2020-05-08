import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header(){
    return ( 
        <header>
            <h1>Unit Converter</h1>
            <h2>Get rid of those pesky imperial units</h2>
        </header>
    );
};

function InputRow(){
    return (
        <div>
            <input type="text" />
            <select id="from">
                <option>kg</option>
                <option>g</option>
                <option>mg</option>
            </select>
            <input type="text"/>
            <select id="to">
                <option>kg</option>
                <option>g</option>
                <option>mg</option>
            </select>
        </div>
    );
}

function Footer(){
    return (
        <footer>
            <i>
                <p>Made by ya boi <a href="https://github.com/jringram">jringram</a></p>
                <p><a href="https://github.com/JRIngram/unit-convert">Github repository</a></p>
            </i>
        </footer>
    )
}

function App() {
    return (
        <div>
            <Header />
            <InputRow />
            <InputRow />
            <InputRow />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));