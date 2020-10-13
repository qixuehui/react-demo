//ant组件
import React from "react";
import ReactDOM from "react-dom";
import "antd-mobile/dist/antd-mobile.css";
import { Button, List } from "antd-mobile";
// 进入随机答题的界面
// const ComplexButtonDemo = () => (
// <List style={{ margin: "5px 0", backgroundColor: "white" }}>
//   <List.Item
//     extra={
//       <Button
//         type="primary"
//         size="big"
//         inline
//         onClick={() => {
//           window.location.href = "http://localhost:3000/dati";
//         }}
//       >
//         随机答题
//       </Button>
//     }
//     multipleLine
//   >
//     简单答题
//     <List.Item.Brief>10道题，答对获取10积分，答错扣10分</List.Item.Brief>
//   </List.Item>
// </List>
// );
//传参用类组件合适
class ComplexButtonDemo extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  onClick = () => {
    console.log(this.props);
    window.location.href = this.props.url;
  };
  render() {
    return (
      <List style={{ margin: "5px 0", backgroundColor: "white" }}>
        <List.Item
          extra={
            <Button type="primary" size="big" inline onClick={this.onClick}>
              {this.props.children}
            </Button>
          }
          multipleLine
        >
          {this.props.children}
          <List.Item.Brief>10道题，答对获取10积分，答错扣10分</List.Item.Brief>
        </List.Item>
      </List>
    );
  }
}

export default ComplexButtonDemo;
