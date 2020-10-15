import '../styles/counter.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            num1 : 0,
            num2 : 0,
            result : 0,
            opera : ''
        }
    };

    operaHandler = (opera) => {
        let operaResult = 0;
        const dom = ReactDom.findDOMNode(this.refs.tip);
        dom.value += opera;
        if (opera === '=') {
            if (this.state.opera === '+') {
                operaResult = Number(this.state.num1) + Number(this.state.num2);
            }
            if (this.state.opera === '-') {
                operaResult = Number(this.state.num1) - Number(this.state.num2);
            }
            dom.value += operaResult;
        }

        this.setState({
            result : operaResult,
            opera : opera
        })
    };

    numHandler = (numb) => {
        const dom = ReactDOM.findDOMNode(this.refs.tip);
        dom.value += numb;
        if (this.state.num1 !== 0) {
            this.setState({
                num2 : numb
            })
        } else {
            this.setState({
                num1 : numb
            })
        }
    };

    clearHandler() {
        const dom = ReactDOM.findDOMNode(this.refs.tip);
        dom.value = undefined;
        this.setState({
            num1 : 0,
            num2 : 0,
            result : 0,
            opera : ''
        })
    };

    render() {
        return (
            <div className={'timerMain'}>
                <div className={'timerHeader'}>
                    <p>在线倒计时器</p>
                </div>
                <div className={'timerBody'}>
                    <div className={'timerLeft'}>
                        <label>设置时间：</label>
                        <input type={'text'} ref={'timeController'} defaultValue={0} onChange={this.setTime}/>
                        <br/>
                        <button onClick={this.countDown}>Start</button>
                    </div>
                    <div className={'showTimer'}>
                        <input type='button' ref={'showTimes'}/>
                    </div>
                </div>
                <div className={'countFooter'}>
                    <Link to={'/'}>回到主页</Link>
                </div>
            </div>
        )
    }
}