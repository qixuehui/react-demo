import React from "react";
import { connect } from "react-redux";
import button from "../component/button";

class login extends React.Component {
  render() {
    return (
      <div className="main-w3layouts wrapper">
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form className="ipform" method="post" action="/login">
              <input type="text" placeholder="用户名" className="text"></input>
              <input
                type="password"
                placeholder="密码"
                className="text"
              ></input>
              <div className="wthree-text">
                <ul>
                  <li>
                    <label className="anim">
                      <input type="checkbox" className="checkbox" />
                      <span>记住</span>
                    </label>
                  </li>
                  <li>
                    <a href="#">忘记密码</a>
                  </li>
                </ul>
                <div className="clear"> </div>
              </div>
              <input type="submit" className="subitem " value="登录"></input>
            </form>
            <p>
              创建一个账号? <a href="/registered"> 立即注册!</a>
            </p>
          </div>
        </div>
        <ul className="w3lsg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default login;
