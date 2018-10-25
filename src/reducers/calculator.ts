import { AnyAction, Reducer } from "redux";
import {
  ActionTypes,
  AllPayloads, 
  IInputNumberPayload
} from "../utils/actionTypes";

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

type AllActions = AnyAction & AllPayloads;

// arguments: 「{now state, action detail}」, return value: 「next state」
const calculator: Reducer<IAppState> = (state: IAppState = InitialAppState, action: AllActions): IAppState => {
  switch (action.type) {
    case ActionTypes.INPUT_NUMBER:
      return inputNumberFunc(state, action as IInputNumberPayload);
    case ActionTypes.PLUS:
      return plusFunc(state);
    default:
      return state;
  }
};

const inputNumberFunc = (state: IAppState, action: IInputNumberPayload): IAppState => {
  return {
    ...state,
    inputValue: state.inputValue * 10 + action.payload.val,
    showingResult: false
  };
};
const plusFunc = (state: IAppState): IAppState => {
  return {
    ...state,
    inputValue: 0,
    resultValue: state.resultValue + state.inputValue,
    showingResult: true
  };
};

export { calculator as calculatorReducer }