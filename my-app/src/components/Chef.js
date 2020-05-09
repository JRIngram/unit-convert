import React from 'react';

export default class Chef extends React.Component{
    constructor(props) {
        super(props);    
        this.state = {date: new Date()};
    }

    displayChef(){

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
        const milisecond = this.state.date.toLocaleTimeString()
            .split(' ')[0]
            .split(':')[2];
        if(milisecond < 15){
            return <img width={200} height={200} src={'/chefs/ainsley.jpeg'} alt="ainsley"/>
        } else if (milisecond >= 15 && milisecond < 30) {
            return <img width={200} height={200} src={'/chefs/gordon.jpeg'} alt="gordon"/>
        }
        else if(milisecond >= 30 && milisecond < 45){
            return <img width={200} height={200} src={'/chefs/nigella.jpeg'} alt="nigella"/>
        }
        else{
            return <img width={200} height={200} src={'/chefs/berry.jpeg'} alt="berry"/>
        }
    }
}