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
    getTimu: async () => {
      let list = await fns.TmList();
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
      currentTimu: 0,
      optionStyle: ["optionltem", "optionltem", "optionltem", "optionltem"],
      isChoose: false,
      score: 0,
    };
  }

  //组件渲染完成

  componentDidMount() {
    this.props.getTimu();
  }

  render() {
    //store
    // console.log(this.props, "------------props");
    //state
    // console.log(this.state, "---------------state");
    // console.log(this.state.currentTimu);
    let timuArr = this.props.topiclist;
    let currentNum = this.state.currentTimu;
    let oStyle = this.state.optionStyle;

    //如果有题目 渲染选择
    if (timuArr.length > 0) {
      // console.log(oStyle, "--------------------oStyle");
      //options数据
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
    //答对
    if (index + 1 === Number(currentAnswer)) {
      let optionStyle = this.state.optionStyle;
      optionStyle[index] = "optionltem correct";
      this.setState({
        optionStyle: optionStyle,
        isChoose: true,
        score: score + 10,
      });
    }
    //答错
    else {
      let optionStyle = this.state.optionStyle;
      optionStyle[index] = "optionltem error";
      //正确答案
      optionStyle[Number(currentAnswer) - 1] = "optionltem correct";
      this.setState({
        optionStyle: optionStyle,
        isChoose: true,
        score: score - 10,
      });
    }
    //2秒跳转至下一题
    let currentNumTimu = this.state.currentTimu;
    setTimeout(() => {
      console.log(currentNumTimu);
      //let currentNum = this.state.currentTimu
      let currentNum = currentNumTimu;
      currentNum++;
      console.log(currentNum);
      if (currentNum === 10) {
        this.props.history.push("/result", { score: this.state.score });
      } else {
        this.setState({
          currentTimu: currentNum,
          optionStyle: ["optionltem", "optionltem", "optionltem", "optionltem"],
          isChoose: false,
        });
      }
    }, 2000);
  };
}

const CompetotionDati = connect(mapStateToProps, mapDispatchToProps)(DatiCom);
export default CompetotionDati;
