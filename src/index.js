import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// 引入css
// require("../public/style.css");
// require("../public/style-print.css");


const rootEl = document.getElementById('root');

render(
    <App />,
    rootEl
);

if(module.hot){
    module.hot.accept('./App',() => {
        const NextApp = require('./App').default;
        render(
            <NextApp />,
            rootEl
        )
    })
}