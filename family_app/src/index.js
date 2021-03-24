import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store"
import "semantic-ui-css/semantic.min.css"
import { Provider } from 'react-redux';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />,
  </Provider>,
    document.getElementById('root')
);


