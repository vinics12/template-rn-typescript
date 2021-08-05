export enum ListTypes {
	LIST_ADD = 'list/LIST_ADD',
  LIST_ADD_SUC = 'list/LIST_ADD_SUC',
}

export interface Item {
  id: number,
  text: string,
}

export interface ListState {
  readonly data: Item[]
  readonly error: boolean
}