import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { usersReducer } from "./users/users.reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
