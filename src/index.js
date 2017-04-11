import React from 'react';
import { render } from 'react-dom';
import App from './App';

// 引入css
// require("../public/style.css");
// require("../public/style-print.css");


const rootEl = document.getElementById('root');

render(
    <App />,
    rootEl
);
