import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <ul>
            <li className='{li1}'><Link to= {"/timer"}>在线倒计时器</Link></li>
            <li className='{li2}'><Link to= {"/counter"}>在线计时器</Link></li>
            <li className='{li3}'><Link to= {"/"}>Home</Link></li>
          </ul>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/counter'} component={Counter}/>
          <Route exact path={'/timer'} component={Timer}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
