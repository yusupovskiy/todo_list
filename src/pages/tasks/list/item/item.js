import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DI } from '../../../../store/';

class ToDoItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    completeTask: PropTypes.func,
    removeTask: PropTypes.func,
    id: PropTypes.number,
  };
  static defaultProps = {
    isCompleted: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      userID: props.userID
    }
  }

  onChangeSelect = ({ target: {value} }) => {
    this.setState({
      userID: value
    });
    this.props.actions.tasks.changeUserTask(
      this.props.id, 
      value
    );
  };

  render() {
    const { text, isCompleted, removeTask, id, completeTask, users, actions } = this.props;
    const { userID } = this.state;
    const onCompleteTask = () => completeTask(id);
    const onRemoveTask = () => removeTask(id);
    const { list } = users;
  
    return (
      <li className="todo-item">
        <i onClick={onCompleteTask} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
        <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
        <select onChange={this.onChangeSelect} value={userID}>
          <option disabled value={''}>Выберите пользователя</option>
          {list.map(el => (
            <option key={el.id} value={el.id}>{el.name}</option>
          ))}
        </select>
        <div onClick={onRemoveTask}>Удалить</div>
      </li>
    );
  }
}

export default DI(['users', 'tasks'])(ToDoItem);