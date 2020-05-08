import React from 'react';

export default class Timer extends React.Component{
    constructor(props) {
        super(props);    
        this.state = {date: new Date()};
    }

    displayChef(){
        const milisecond = this.state.date.toLocaleTimeString()
                        .split(' ')[0]
                        .split(':')[2];
        if(milisecond < 15){
            return (
                <img width={200} height={200} src={'/chefs/ainsley.jpeg'}/>
            )
        }
        else if(milisecond >= 15 && milisecond < 30){
            return (
                <img width={200} height={200} src={'/chefs/gordon.jpeg'}/>
            )
        }
        else if(milisecond >= 30 && milisecond < 45){
            if(milisecond % 2 === 0){
                return (
                    <>
                        <h3>YAAAS QUEEN</h3>
                        <img width={200} height={200} src={'/chefs/nigella.jpeg'}/>
                    </>
                );
            }
            else{
                return <img width={200} height={200} src={'/chefs/nigella.jpeg'}/>
            }

        }
        else{
            return (
                <img width={200} height={200} src={'/chefs/berry.jpeg'}/>
            )
        }
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
            <div>

                { this.displayChef() }
                <p>The time is: {this.state.date.toLocaleTimeString()}</p>
            </div>

        );
    }
}