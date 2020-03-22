// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'
// import { hydrate, render } from 'react-dom'
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux'

import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import pt from "react-intl/locale-data/pt";

import './static/css/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import ConfigureStore from './redux/store'

// define locale dataset to our scope
addLocaleData(en);
addLocaleData(pt);
addLocaleData(es);

const rootElement = document.getElementById('root')

// if (rootElement.hasChildNodes()) {

//   hydrate(<Provider store={ConfigureStore()}>
//     <App />
//   </Provider>, rootElement)
// } else {
//   render(<Provider store={ConfigureStore()}>
//     <App />
//   </Provider>, rootElement)
// }

ReactDOM.render(<Provider store={ConfigureStore()}><App /></Provider>, rootElement);


serviceWorker.register();
