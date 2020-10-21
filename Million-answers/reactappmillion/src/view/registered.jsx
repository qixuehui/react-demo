import React from "react";

class registered extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="main-w3layouts wrapper">
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form
              id="ipform"
              className="ipform"
              method="post"
              action="http://localhost:8080/registered"
            >
              <input
                type="text"
                placeholder="用户名"
                className="text"
                id="username"
                name="username"
              ></input>
              <input
                type="password"
                placeholder="密码"
                className="text"
                id="password"
                name="password"
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
}

export default registered;
