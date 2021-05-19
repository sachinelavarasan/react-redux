import {REMOVE_TODO} from "../actions/todoActions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return { todos: state.todos.filter((todo) => todo != action.payload) };
    default:
      return state;
  }
};

export default todoReducer;
