import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './item/';

const ToDoList = ({ tasksList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted, userID }) => (
      <ToDoItem key={id} completeTask={completeTask} removeTask={removeTask} id={id} userID={userID} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
}

ToDoList.defaultProps = {
  tasksList: [],
}

export default ToDoList;