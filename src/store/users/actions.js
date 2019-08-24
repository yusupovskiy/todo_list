import * as C from './const';

export const addUser = (id, name) => ({
  type: C.ADD_USERS,
  id,
  name
});