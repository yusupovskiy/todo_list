import * as C from './const';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' }).tasks;

if (!TASKS || !TASKS.list || !TASKS.list.length) {
  TASKS = {
    list: [],
  }
}

export const list = (state = TASKS.list, { id, text, isCompleted, type }) => {
  switch (type) {
    case C.ADD_TASK:
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
			];
			
    case C.REMOVE_TASK:
			return [...state].filter(task => task.id !== id);

		case C.COMPLETE_TASK:
			return [...state].map(task => {
				if(task.id === id) {
					task.isCompleted = !task.isCompleted;
				}
				return task;
			});

    default:
      return state;
  }
}

const BASE_FILTER = 'all';

export const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case C.CHANGE_FILTER:
      return activeFilter;
      break;
    default:
      return state;
  }
}