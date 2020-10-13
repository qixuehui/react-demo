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
import SuccessResult from "./view/SuccessResult";
import FailureResult from "./view/FailureResult";
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
      {/* 三种答题情况 */}
      <Route path="/dati" exact component={Dati}></Route>
      <Route path="/passdati" exact component={PassDati}></Route>
      <Route path="/competitiondati" exact component={CompetitionDati}></Route>
      {/* 成功或者失败组件路由跳转 */}
      <Route path="/result" exact component={Result}></Route>
      <Route path="/failureResult" exact component={FailureResult}></Route>
      <Route path="/successResult" exact component={SuccessResult}></Route>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
