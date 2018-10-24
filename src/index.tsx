import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { rootReducer } from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import { Routes } from './routes';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
