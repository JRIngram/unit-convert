import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import InputRow from './components/InputRow';

/**
 * Component which contains all the input rows
 */
class Input extends React.Component{
    render() {
        return (
            <div>
                <InputRow />
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