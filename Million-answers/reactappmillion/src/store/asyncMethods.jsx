// //异步方法
import axios from "axios";

const host = "http://localhost:8080";
//请求随机的数据
//随机1次
let fns = {
  async TmList() {
    console.log("TmList");
    let page = parseInt(Math.random() * 30);
    let httpUrl = `${host}/api/rtimu?page=${page}`;
    //封装成promise
    let res = await new Promise((resolve, reject) => {
      axios.get(httpUrl).then((res) => {
        resolve(res);
      });
    });
    return res.data;
  },
  //1-10
  //传输入page
  async PassTmList(page) {
    console.log("PassTmList");
    console.log(page, "-----------page3");
    let httpUrl = `${host}/api/rtimu?page=${page}`;
    //封装成promise
    let res = await new Promise((resolve, reject) => {
      axios.get(httpUrl).then((res) => {
        resolve(res);
      });
    });
    return res.data;
  },
  //随机10次
  async CompetitionTmList() {
    console.log("CompetitionTmList");
    let page = 1;
    let httpUrl = `${host}/api/rtimu?page=${page}`;
    //封装成promise
    let res = await new Promise((resolve, reject) => {
      axios.get(httpUrl).then((res) => {
        resolve(res);
      });
    });

    return res.data;
  },
};

export default fns;
