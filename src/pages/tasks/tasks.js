import React, { Component } from 'react';
import { DI } from '../../store';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/tasks/actions';
import { getVisibleTodos } from '../../selectors'

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
    console.log('Пересобираем 1')
    switch (activeFilter) {
      case 'SHOW_ALL':
        return tasks;
      case 'SHOW_COMPLETED':
        return tasks.filter(task => task.isCompleted);
      case 'SHOW_ACTIVE':
        return tasks.filter(task => !task.isCompleted);
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks: { list, filter } } = this.props;
    const { removeTask, completeTask, changeFilter } = this.props.actions.tasks;
    const isTasksExist = list && list.length > 0;
    const filteredTasks = this.props.todos;
    const taskCounter = this.getActiveTasksCounter(list);

    console.log(this.props)

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />}
        {isTasksExist && <Filter changeFilter={changeFilter} amount={taskCounter} activeFilter={filter} />}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    todos: getVisibleTodos(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      tasks: bindActionCreators(actions, dispatch)
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks)

export default VisibleTodoList

// export default DI(['tasks'])(VisibleTodoList);