import { action } from 'typesafe-actions';
import { ActionTypes } from '../utils/actionTypes';

export const onNumClick = (num: number) => action(ActionTypes.INPUT_NUMBER, num);
export const onPlusClick = () => action(ActionTypes.PLUS);