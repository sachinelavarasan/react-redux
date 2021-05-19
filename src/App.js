import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./redux/reducers";
import logo from "./logo.svg";
import "./App.css";
import NewTodo from "./components/NewTodo";
import ViewTodo from "./components/ViewTodo";

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <NewTodo />
      <ViewTodo />
    </Provider>
  );
}

export default App;
