import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { Reducer } from "./reducer";

//? applyMiddleware -- промежуточный мост,между Redux и Thunk (связка)

export const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
