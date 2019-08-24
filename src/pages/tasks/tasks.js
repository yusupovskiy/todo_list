import React, { Component } from 'react';
import { DI } from '../../store';

import ToDoInput from '../../components/input';
import ToDoList from './list';
import Filter from './filter';

class Tasks extends Component {
  state = {
    taskText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  addTast = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const { actions } = this.props;
      actions.tasks.addTast((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      });
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks: { list, filter } } = this.props;
    const { removeTask, completeTask, changeFilter } = this.props.actions.tasks;
    const isTasksExist = list && list.length > 0;
    const filteredTasks = this.filterTasks(list, filter);
    const taskCounter = this.getActiveTasksCounter(list);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />}
        {isTasksExist && <Filter changeFilter={changeFilter} amount={taskCounter} activeFilter={filter} />}
      </div>
    );
  }
}

export default DI(['tasks'])(Tasks);