import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { convertMass, convertVolume } from 'ts-unit-convert';

function Header(){
    return ( 
        <header>
            <h1>Unit Converter</h1>
            <h2>Get rid of those pesky imperial units</h2>
        </header>
    );
};

/**
 * Component which handles the input and conversion of inputs to units.
 * Includes: text inputs and dropdowns.
 */
class InputRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fromValue: 0,
            fromUnit: 'kg',
            toValue: 0,
            toUnit: 'g',
        };

        this.toUnitChange = this.toUnitChange.bind(this);
    }

    toUnitChange(event){
        console.log(event.target.value);
        this.setState({fromValue: event.target.value});
        const convertedValue = this.state.fromValue / 1000;
        this.setState({toValue: convertedValue});

    }

    // componentDidMount() {
    //     const convertedValue = convertMass(this.state.fromValue,'kg', 'g');
    //     this.setState({toValue: convertedValue});
    // }

    // convertInputMass(){
    //     try{
    //         const convertedValue = convertMass(100,'kg', 'g');
    //         this.setState({toValue: convertedValue});
    //     }catch(err){
    //         console.log(err);
    //     }
    //     return 5;
    // }

    render() {
        return (
            <div>
                <input type="text" value={this.state.fromValue} onChange={this.toUnitChange}/>
                
                <select id="from">
                    <option>g</option>
                    <option>g</option>
                    <option>g</option>
                </select>

                <input type="text" value={this.state.toValue}/>

                <select id="to" onChange={console.log('hello')}>
                    <option>kg</option>
                    <option>kg</option>
                    <option>kg</option>
                </select>
            </div>
        );
    }

}

/**
 * Component which contains all the input rows
 */
class Input extends React.Component{
    render() {
        return (
            <div>
                <InputRow value="100" unit="kg"/>
            </div>
        );
    }
}

/**
 * Random timer element to understand states.
 */
class Time extends React.Component{
    constructor(props) {
        super(props);    
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({date: new Date()});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }
    componentWillUnmount() { 
        clearInterval(this.timerID);
    }

    render() {
        return (
            <p>The time is: {this.state.date.toLocaleTimeString()}</p>
        );
    }
}

/**
 * Contains links to repo and website
 */
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
            <Time />
            <Input />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));