import * as C from './const';

export const addTast = (id, text, isCompleted) => ({
  type: C.ADD_TASK,
  id,
  text,
  isCompleted
});

export const removeTask = id => ({
  type: C.REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: C.COMPLETE_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: C.CHANGE_FILTER,
  activeFilter,
});

export const changeUserTask = (taskID, userID) => ({
  type: C.CHANGE_USER_TASK,
  payload: {
    taskID,
    userID
  },
});