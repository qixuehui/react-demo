// 首页
//3000
import React from "react";
import { connect } from "react-redux";
import ComplexButtonDemo from "../component/button";
// import { Button } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

class Home extends React.Component {
  render() {
    // const onAddClick = this.props.onAddClick
    let url = "http://localhost:3000/dati";
    let Passurl = "http://localhost:3000/passdati";
    let Competitionurl = "http://localhost:3000/competitiondati";
    return (
      <div className="back">
        <ComplexButtonDemo className="bitem" url={url}>
          随机答题
        </ComplexButtonDemo>
        <ComplexButtonDemo className="bitem" url={Passurl}>
          闯关答题
        </ComplexButtonDemo>
        <ComplexButtonDemo className="bitem" url={Competitionurl}>
          竞赛答题
        </ComplexButtonDemo>
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
  // 进入随机答题的界面
  goRandomanswerPage = () => {
    //console.log(this.props)
    this.props.history.push("/dati");
  };
  // 进入闯关答题的界面
  goAnswerquestionsiPage = () => {
    //console.log(this.props)
    this.props.history.push("/passdati");
  };
  // 进入竞赛答题的界面
  goContestanswerPage = () => {
    //console.log(this.props)
    this.props.history.push("/competitiondati");
  };
}

//state->props
function mapStateToProps(state) {
  return { ...state };
}
//methods->props
function mapDispatchToProps(dispatch) {
  return {
    // onAddClick: () => {
    //   dispatch({ type: "Getquestions" });
    // },
  };
}
//连接
const App = connect(mapStateToProps, mapDispatchToProps)(Home);

export default App;
