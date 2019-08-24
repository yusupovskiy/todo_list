import * as C from './const';
import { load } from 'redux-localstorage-simple';

let USERS = load({ namespace: 'todo-list' }).users;

if (!USERS || !USERS.list || !USERS.list.length) {
  USERS = {
    list: [],
  }
}

export const list = (state = USERS.list, { id, name, type }) => {
  switch (type) {
		case C.ADD_USERS: 
			return [
				...state,
				{
					id,
					name
				}
			]
    default:
      return state;
  }
}