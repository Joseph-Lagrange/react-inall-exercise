import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../styles/timer.css';

class Timer extends Component{
    constructor() {
        super();
        this.state = {
            time : 0
        }
    }

    setTime = () => {
        const timCon = ReactDOM.findDOMNode(this.refs.timeController);
        const time = timCon.value;
        this.setState({
                time : time
        })
    }

    componentDidMount() {
        const showTimer = ReactDOM.findDOMNode(this.refs.showTimes);
        showTimer.value = 'Start';
    }

    countDown = () => {
        let time = this.state.time;
        const showTimer = ReactDOM.findDOMNode(this.refs.showTimes);
        showTimer.value = time;
        if (time > 0) {
            this.setState({
                time : time - 1
            })
        } else {
            showTimer.value = 'End';
            return;
        }
        setTimeout(() => {
            this.countDown();
        }, 1000);
    }

    render() {
        return (
            <div className={'counterMain'}>
                <div className={'counterTitle'}><p>在线计算器</p></div>
                <div className={'counterBody'}>
                    <div className={'counterFirst'}>
                        <input className={'scoren'} ref={'tip'}/>
                    </div>
                    <div className={'operaBtn'}>
                        <button className={'firstOper'} onClick={this.operaHandler.bind(this, '+')}>+</button>
                        <button onClick={this.operaHandler.bind(this, '-')}>-</button>
                        <button onClick={this.operaHandler.bind(this, '*')}>*</button>
                    </div>
                    <div className={'numberBtn'}>
                        <button onClick={this.operaHandler.bind(this, 7)}>7</button>
                        <button onClick={this.operaHandler.bind(this, 8)}>8</button>
                        <button onClick={this.operaHandler.bind(this, 9)}>9</button>
                        <br/>
                        <button onClick={this.operaHandler.bind(this, 4)}>4</button>
                        <button onClick={this.operaHandler.bind(this, 5)}>5</button>
                        <button onClick={this.operaHandler.bind(this, 6)}>6</button>
                        <br/>
                        <button onClick={this.operaHandler.bind(this, 1)}>1</button>
                        <button onClick={this.operaHandler.bind(this, 2)}>2</button>
                        <button onClick={this.operaHandler.bind(this, 3)}>3</button>
                        <br/>
                        <button onClick={this.operaHandler.bind(this, 8)}>8</button>
                        <button onClick={'clear'} onClick={this.clearHandler}>Clear</button>
                        <button onClick={'equalsBtn'} onClick={this.operaHandler.bind(this, '=')}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}