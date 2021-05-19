import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../redux/actions/todoActions";

const ViewTodo = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li>
            {todo}
            <button
              onClick={() => {
                props.removeTodo(todo);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default connect(
  (state) => {
    return { todos: state.todo.todos };
  },
  { removeTodo }
)(ViewTodo);
