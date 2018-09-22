import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { CalculatorContainer } from './containers/CalculatorContainer';
import { reducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
