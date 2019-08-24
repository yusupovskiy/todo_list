import React, { Component } from 'react';
import { DI } from '../../store';

import ToDoInput from '../../components/input';
import List from './list';

class Users extends Component {
  state = {
    taskText: ''
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  addUser = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { actions } = this.props;
      actions.users.addUser((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      });
    }
  }

  render() {
    const { taskText } = this.state;
    const { users: { list } } = this.props;

    return (
      <div className="todo-wrapper">
        <ToDoInput 
          onKeyPress={this.addUser} 
          onChange={this.handleInputChange} 
          value={taskText}
        />
        <List list={list} />
      </div>
    );
  }
}

export default DI(['users'])(Users);