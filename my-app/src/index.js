import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import InputRow from './components/InputRow';

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

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rowCount: this.props.rows,
        }
    }

    calculateRows(){
        let rows = []
        for(let i = 0; i < this.state.rowCount; i++){
            rows.push(<InputRow key={i}/>)
        }
        return rows;
    }

    handleClick(add) {
        if(add){
            this.setState({rowCount: this.state.rowCount + 1});
        }
        else if(!add && this.state.rowCount > 1){
            this.setState({rowCount: this.state.rowCount - 1});
        }
    };

    render() {
        const rows = this.calculateRows();
        return (
            <div>
                {rows}
                <button onClick={() => this.handleClick(true)}><img src="add_circle.svg" width={20}/></button>
                <button onClick={() => this.handleClick(false)}><img src="remove_circle.svg" width={20}/></button>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Header />
            <Time />
            <Input rows={3}/>
            <Footer />
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);