//需要的外置组件
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
// 需要的数据
import App from "./view/App";
import Dati from "./view/Dati";
import PassDati from "./view/PassDati";
import CompetitionDati from "./view/CompetitionDati";
import Result from "./view/Result";
import store from "./store/data";
import "./assets/css/style.css";
// import { createStore } from 'redux'
// import { Button } from 'antd-mobile'
//
// import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* exact精确 */}
      <Route path="/" exact component={App}></Route>
      <Route path="/dati" exact component={Dati}></Route>
      <Route path="/passdati" exact component={PassDati}></Route>
      <Route path="/competitiondati" exact component={CompetitionDati}></Route>
      <Route path="/result" component={Result}></Route>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
