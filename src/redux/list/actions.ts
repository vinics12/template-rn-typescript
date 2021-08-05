import { action, Action } from 'typesafe-actions';
import { ListTypes, Item } from './types';

export const addList = (): Action => action(ListTypes.LIST_ADD);
export const addListSuc = (data: Item[]): Action => action(ListTypes.LIST_ADD_SUC, data);