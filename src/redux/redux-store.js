import { reducer as formReducer } from "redux-form";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import eventReducer from "./events-reducer";

let reducer = combineReducers({
  form: formReducer,
  events: eventReducer
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

// window.store = store;
export default store;
