import React from "react";
import { connect } from "react-redux";
import { Button } from "antd-mobile";

//将state映射到props函数
function mapStateToProps(state) {
  return { ...state };
}

//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch) {
  return {
    onAddClick: () => {
      dispatch({ type: "add" });
    },
  };
}

class Counter extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 className="center">Oh~~~你失败了</h1>
        <Button onClick={this.goPassDatiPage} className="padbt">
          再挑战一次
        </Button>
        <Button onClick={this.goDatiPage} className="padbt">
          回到首页
        </Button>
      </div>
    );
  }
  goDatiPage = () => {
    //console.log(this.props)
    this.props.history.push("/");
  };
  goPassDatiPage = () => {
    //console.log(this.props)
    this.props.history.push("/passdati");
  };
}

//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const FailureResult = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default FailureResult;
