import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware  from 'redux-thunk';
import categoryReducer from "./reducer";

const reducers = combineReducers({
  CategoryPage: categoryReducer,
})

const store = createStore (reducers, applyMiddleware (thunkMiddleware));

window.store = store;

export default store;