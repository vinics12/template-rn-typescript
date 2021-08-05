import { all, takeLatest } from '@redux-saga/core/effects';

import { ListTypes } from './list/types'; 
import { list } from './list/sagas';

export default function* rootSaga() {
	yield all([
		takeLatest(ListTypes.LIST_ADD, list),
	]);
}