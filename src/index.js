import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import createStore from "./reducks/store/store";

export const store =createStore()

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// providerはpropsにstoreを渡す
//　react-reduxのconnect関数を使えるようにする
// reactとreduxを接続してstoreを変更できるようにする