import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component {
    render() {
        return ( <
            div > 你好 < Button > Start < /Button> </div >
        )
    }
}


ReactDOM.render( < App / > , document.querySelector("#root"))