import React from 'react';
import './home.less';
import timerImg from '../images/timer.png';

const Home = () => {
  return (
      <div className="home">
        <div className={'introduce'}><p>在线实用工具</p></div>
        <div className={'footer'}>
          <div className={'counterIntro'}>
            <img src={cal}/>
            <p><Link to={"/counter"}>计算器</Link></p>
          </div>
          <div className={'timerIntro'}>
            <img src={timerImg}/>
            <p><Link to={'/timer'}>倒计时器</Link></p>
          </div>
        </div>
      </div>);
};

export default Home;