import { AnyAction, Reducer } from "redux";
import { ActionTypes } from '../utils/actionTypes';

export interface IAppState {
  inputValue: number;
  resultValue: number;
  showingResult: boolean;
};

const InitialAppState: IAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
};

// arguments: 「{now state, action detail}」, return value: 「next state」
const calculator: Reducer<IAppState> = (state: IAppState = InitialAppState, action: AnyAction): IAppState => {
  switch (action.type) {
    case ActionTypes.INPUT_NUMBER:
      return inputNumberFunc(state, action);
    case ActionTypes.PLUS:
      return plusFunc(state, action);
    default:
      return state;
  }
};

const inputNumberFunc = (state: IAppState, action: AnyAction): IAppState => {
  return {
    ...state,
    inputValue: state.inputValue * 10 + action.payload.num,
    showingResult: false
  };
};
const plusFunc = (state: IAppState, action: AnyAction): IAppState => {
  return {
    ...state,
    inputValue: 0,
    resultValue: state.resultValue + state.inputValue,
    showingResult: true
  };
};

export { calculator as calculatorReducer }