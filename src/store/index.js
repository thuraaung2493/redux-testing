import { createStore } from "redux";
import todoApp from "./reducers";
import { addTodo, toggleTodo, setVisibilityFilter } from "./actions";
const store = createStore(todoApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo("hello world!"));
