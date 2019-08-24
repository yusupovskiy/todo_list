import * as C from './const';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' }).tasks;

if (!TASKS || !TASKS.list || !TASKS.list.length) {
  TASKS = {
    list: [],
  }
}

export const list = (state = TASKS.list, { id, text, isCompleted, type, payload }) => {
  switch (type) {
    case C.ADD_TASK:
      return [
        ...state, {
          id,
          text,
          isCompleted,
          userID: 1566572388227
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

    case C.CHANGE_USER_TASK:
      return [...state].map(task => {
        if(task.id === payload.taskID) {
          task.userID = payload.userID;
        }
        return task;
      });

    default:
      return state;
  }
};

const BASE_FILTER = 'all';

export const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case C.CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};