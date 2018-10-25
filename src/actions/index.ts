import { action } from 'typesafe-actions';
import { ActionTypes, IInputNumberType } from '../utils/actionTypes';

export const onNumClick = (num: number) => action<ActionTypes.INPUT_NUMBER, IInputNumberType>(
    ActionTypes.INPUT_NUMBER,
    { val: num }
);

export const onPlusClick = () => action<ActionTypes.PLUS>(ActionTypes.PLUS);