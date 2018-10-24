import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CalculatorContainer from './containers/CalculatorContainer';

export const Routes: React.SFC = () => (
  <BrowserRouter>
    <Route path="/" component={CalculatorContainer} />
  </BrowserRouter>
);