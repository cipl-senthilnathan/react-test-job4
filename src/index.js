import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';
import addCategory from './components/protected/addCategory';
import editCategory from './components/protected/editCategory';

import categoryStore from './stores/categoryStore';

require("./index.css");

const stores = {
  categoryStore
};
const history = createBrowserHistory();


window._____APP_STATE_____ = stores;

ReactDOM.render(
	<Provider {...stores}>
  <App />
  </Provider>,
  document.getElementById('root')
);
