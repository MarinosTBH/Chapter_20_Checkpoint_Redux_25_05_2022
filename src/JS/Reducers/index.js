import { combineReducers } from "redux";
import ReducerTaskToDo from "./ReducerTaskToDo";
import filterTodo from "./filter.reducers";

export default combineReducers({
    ReducerTaskToDo,
  filterTodo
});
