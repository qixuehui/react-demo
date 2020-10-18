import React from "react";

class registered extends React.Component {
  render() {
    return (
      <div className="main-w3layouts wrapper">
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form id="ipform" className="ipform">
              <input
                type="text"
                placeholder="用户名"
                className="text"
                id="username"
              ></input>
              <input
                type="password"
                placeholder="密码"
                className="text"
                id="password"
              ></input>
              <div className="wthree-text">
                <ul>
                  <li>
                    <label className="anim">
                      <input type="checkbox" className="checkbox" />
                      <span>记住</span>
                    </label>
                  </li>
                </ul>
                <div className="clear"> </div>
              </div>
              <input
                type="submit"
                className="subitem "
                value="注册"
                onClick={this.ajax}
              ></input>
            </form>
            <p>
              已有一个账号? <a href="/"> 立即登录!</a>
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
      let formData = {
        fusername: username,
        fpassword: password,
      };
      var xhr = new XMLHttpRequest();
      xhr.open(
        "get",
        `http://localhost:8080/registered?username=${username}&password=${password}`
      );
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
    });
  }
}

export default registered;
