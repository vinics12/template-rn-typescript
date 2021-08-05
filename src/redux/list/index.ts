/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Reducer } from 'redux';
import { ListState, ListTypes } from './types';

const INITIAL_STATE: ListState = {
	data: [
		{ id: 0, text: 'lista vazia' },
	],
	error: false,
};

const reducer: Reducer<ListState> = (state = INITIAL_STATE, action) => {
	switch (action.type){
		case ListTypes.LIST_ADD_SUC:
			return { ...state, data: [...state.data, ...action.payload.data], error: false };
		default:
			return state;
	}
};

export default reducer;