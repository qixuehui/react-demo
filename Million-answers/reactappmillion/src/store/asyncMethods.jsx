// //异步方法
import axios from "axios";

const host = "http://localhost:8080";
//请求随机的数据
let fns = {
  async TmList() {
    console.log("TmList");
    let page = parseInt(Math.random() * 10);
    let httpUrl = `${host}/api/rtimu?page=${page}`;
    //封装成promise
    let res = await new Promise((resolve, reject) => {
      axios.get(httpUrl).then((res) => {
        resolve(res);
      });
    });
    // console.log(res.data);
    return res.data;
  },
};

export default fns;
