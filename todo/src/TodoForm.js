import React, {Component} from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: [],
      //mock data: "dew this", "dew that", "dew nothing", "whatever dewd"
    };
    this.getTodo = this.getTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  getTodo(event) {
    this.setState({ todo: event.target.value });
  }
  addTodo(event) {
    event.preventDefault();
    this.setState({ todos: [...this.state.todos, this.state.todo] });
    this.setState({ todo: '' });
    console.log(this.state.todos)
  }
  render() {
    return (
      <div>
        <form className="todo-form" onSubmit={ this.addTodo }>
          <h1>2dews</h1>
          <div className="input-container">
            <input className="input-bar" value={ this.state.todo } onChange={ this.getTodo }/>
            <button className="submit-button" type="submit"></button>
          </div>
            <div className="list-div">
              <ul className="my-list">
                { this.state.todos.map((todo, index) => <li key={index}>{todo}</li>) }
              </ul>
            </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
