//答题页面
import React from "react";
import { connect } from "react-redux";
import fns from "../store/asyncMethods";
import loadingImg from "../assets/img/loading.gif";
// import ReactDOM from 'react-dom';
// import { Button } from 'antd-mobile'

function mapStateToProps(state) {
  return { ...state };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddClick: () => {
      dispatch({ type: "add" });
    },
    // page
    getTimu: async (page) => {
      console.log(page, "---------------------page2");
      let list = await fns.PassTmList(page);
      dispatch({
        type: "Getquestions",
        content: list,
      });
    },
  };
}
class DatiCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pagesum: 0,
      timusum: 0,
      currentTimu: 0,
      optionStyle: ["optionltem", "optionltem", "optionltem", "optionltem"],
      isChoose: false,
      score: 0,
      isexit: false,
    };
  }

  //组件渲染完成

  componentDidMount() {
    this.props.getTimu(this.state.page);
  }

  render() {
    let timuArr = this.props.topiclist;
    let currentNum = this.state.currentTimu;
    let oStyle = this.state.optionStyle;
    //如果有题目 渲染选择
    if (timuArr.length > 0) {
      console.log(timuArr);
      let options = JSON.parse(timuArr[currentNum].options);
      return (
        <div className='datiPage"'>
          {/* 题目 */}
          <h2>
            {currentNum + 1}-{timuArr[currentNum].quiz}
          </h2>
          {/* 选择 */}
          <div className="options">
            {/* 列表遍历 */}
            {options.map((item, index) => {
              return (
                <div
                  key={index}
                  className={oStyle[index]}
                  onClick={() => {
                    this.answerEvent(index);
                  }}
                >
                  {index + 1}:{item}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    //等待
    else {
      console.log("没有length");
      return (
        <div>
          <img src={loadingImg} alt="img" />
        </div>
      );
    }
  }

  //跳转
  goDatiPage = () => {
    this.props.history.push("/dati");
  };

  //回答问题
  answerEvent = (index) => {
    //已经选择了就不可以在选择了
    if (this.state.isChoose) {
      return true;
    }
    // console.log(index);
    //this.state.currentTimu当前题目的正确答案 index
    let currentAnswer = this.props.topiclist[this.state.currentTimu].answer;
    // console.log(currentAnswer);
    //请求数据
    let score = this.state.score;
    let timusum = this.state.timusum;
    let isexit = this.state.isexit;
    //答对
    if (index + 1 === Number(currentAnswer)) {
      timusum++;
      isexit = false;
      let optionStyle = this.state.optionStyle;
      optionStyle[index] = "optionltem correct";
      this.setState({
        optionStyle: optionStyle,
        isChoose: true,
        score: score + 10,
        timusum: timusum,
        isexit: false,
      });
    }
    //答错
    else {
      isexit = true;
      let optionStyle = this.state.optionStyle;
      optionStyle[index] = "optionltem error";
      //正确答案
      optionStyle[Number(currentAnswer) - 1] = "optionltem correct";
      this.setState({
        isexit: true,
        optionStyle: optionStyle,
        isChoose: true,
        score: score - 10,
      });
    }
    if (isexit) {
      window.location.href = "http://localhost:3000/failureResult";
    }
    //2秒跳转至下一题
    let currentNumTimu = this.state.currentTimu;
    let sum = this.state.pagesum;
    let page = this.state.page;
    setTimeout(() => {
      console.log(currentNumTimu);
      //let currentNum = this.state.currentTimu
      let currentNum = currentNumTimu;
      currentNum++;
      console.log(currentNum);
      if (sum === 30) {
        this.props.history.push("/successresult");
      } else {
        if (currentNum % 9 === 0) {
          console.log("下一页了");
          this.setState({
            page: ++this.state.page,
            pagesum: ++this.state.pagesum,
            currentTimu: currentNum,
            optionStyle: [
              "optionltem",
              "optionltem",
              "optionltem",
              "optionltem",
            ],
            isChoose: false,
          });
          //请求下一页
          console.log(this.state.page, "-------------page");
          this.props.getTimu(this.state.page);
        } else {
          this.setState({
            currentTimu: currentNum,
            optionStyle: [
              "optionltem",
              "optionltem",
              "optionltem",
              "optionltem",
            ],
            isChoose: false,
          });
        }
      }
    }, 1000);
  };
}

const PassDati = connect(mapStateToProps, mapDispatchToProps)(DatiCom);
export default PassDati;
