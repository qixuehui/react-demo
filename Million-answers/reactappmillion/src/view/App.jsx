// 首页
import React from "react";
import { connect } from "react-redux";
import { Button } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

class Home extends React.Component {
  render() {
    // const onAddClick = this.props.onAddClick
    return (
      <div>
        <Button onClick={this.goRandomanswerPage}> 随机答题 </Button>
        <Button onClick={this.goAnswerquestionsiPage}> 闯关答题 </Button>
        <Button onClick={this.goContestanswerPage}> 竞赛答题 </Button>
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
