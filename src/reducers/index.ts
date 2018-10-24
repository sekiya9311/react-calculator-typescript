import { combineReducers } from 'redux';
import { calculatorReducer, IAppState } from './calculator';

export interface IApplicationState {
  appState: IAppState
};

export const rootReducer = combineReducers<IApplicationState>({
  appState: calculatorReducer
});
