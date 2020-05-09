import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import InputRow from './components/InputRow';
import Chef from './components/Chef';
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
                <button className="add-button" onClick={() => this.handleClick(true)}><img src="add_circle.svg" alt="+"/></button>
                <button className="remove-button" onClick={() => this.handleClick(false)}><img src="remove_circle.svg" alt="-"/></button>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Header />
            <Chef />
            <Input rows={3}/>
            <Footer />
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);