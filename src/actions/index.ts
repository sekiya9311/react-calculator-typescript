import { Action } from 'redux';
import { ActionTypes } from '../utils/actionTypes';

export interface IOnNumClickAction extends Action {
  type: ActionTypes.INPUT_NUMBER;
  payload: {
    num: number
  };
};
export const onNumClick = (num: number): IOnNumClickAction => {
  return {
    payload: { num },
    type: ActionTypes.INPUT_NUMBER
  };
};

export interface IOnPlusClickAction extends Action {
  type: ActionTypes.PLUS;
};
export const onPlusClick = (): IOnPlusClickAction => {
  return {
    type: ActionTypes.PLUS,
  };
};

export type CalculatorActions = IOnNumClickAction | IOnPlusClickAction;