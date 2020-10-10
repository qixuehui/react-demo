import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component {
    //生命周期
    //将渲染
    async componentWillMount() {
        let page = 2;
        let httpURL = `http://localhost:8080/api/rtimu?page=${page}`
        let result = await axios.get(httpURL)
        console.log(result);
    }
    render() {
        return ( <
            div > 你好 < Button > Start < /Button> </div >
        )

    }
}
ReactDOM.render( < App / > , document.querySelector("#root"))