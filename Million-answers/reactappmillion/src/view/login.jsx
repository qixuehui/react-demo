import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import button from "../component/button";

class login extends React.Component {
  render() {
    return (
      <div className="main-w3layouts wrapper">
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form className="ipform" id="ipform">
              <input
                type="text"
                placeholder="用户名"
                className="text"
                id="username"
                username=""
              ></input>
              <input
                type="password"
                placeholder="密码"
                className="text"
                id="password"
                password=""
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
              <input
                type="submit"
                className="subitem "
                value="登录"
                onClick={this.ajax}
              ></input>
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
  ajax() {
    document.querySelector("#ipform").addEventListener("submit", function (e) {
      e.preventDefault();
      let ipfrom = document.querySelector("#ipform");
      let username = ipfrom.querySelector("#username").value;
      let password = ipfrom.querySelector("#password").value;
      let result = new Promise((resolve, reject) => {
        resolve(
          axios.get(
            `http://localhost:8080/login?username=${username}&password=${password}`
          )
        );
      });
      console.log(result);
    });
  }
}

export default login;
