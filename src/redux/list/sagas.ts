import { call, put } from '@redux-saga/core/effects';
import { addListSuc } from './actions'; 
import { Item } from './types';

const apiMethod = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{ id: 1, text: 'Configurar o projeto' },
				{ id: 2, text: 'Testar o eslint' },
				{ id: 3, text: 'Configurar o saga' },
				{ id: 4, text: 'Ser feliz o/' },
			]);
		}, 2000);
	});
};

export function* list() {
	try{
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const response :Item[] = yield call(apiMethod);
		yield put(addListSuc({ data: response }));
	}catch(err) {
		console.log('deu ruim show');
	}
}