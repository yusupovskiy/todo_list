import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.tasks.filter
const getTodos = (state) => state.tasks.list

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    console.log('Пересобираем 2')
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)