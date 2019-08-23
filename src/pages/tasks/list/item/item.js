import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask }) => {
  const onCompleteTask = () => completeTask(id);
  const onRemoveTask = () => removeTask(id);

  return (
    <li className="todo-item">
      <i onClick={onCompleteTask} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
      <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
      <div onClick={onRemoveTask}>Удалить</div>
    </li>
  );
}

ToDoItem.propTypes = {
  text: PropTypes.string,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
  id: PropTypes.number,
}

ToDoItem.defaultProps = {
  isCompleted: false,
}

export default ToDoItem;