export enum ActionTypes {
  INPUT_NUMBER = 'INPUT_NUMBER',
  PLUS = 'PLUS'
};

export interface IInputNumberType {
  val: number
};

export interface IInputNumberPayload {
  payload: IInputNumberType;
};

export type AllPayloads = IInputNumberPayload;