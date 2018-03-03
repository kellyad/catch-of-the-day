// let's go!

import React from 'react';
import ReactDOM from 'react-dom';
//import './css/index.css';
import { render } from "react-dom";
import Router from "./components/Router";
//import "./css/style.css";
import App from './components/App';
import StorePicker from './components/StorePicker';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<StorePicker />, document.querySelector('#main'));

render(<Router />, document.querySelector("#main"));
