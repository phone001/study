import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { reducer } from "./";

export const user = createStore(reducer);
//export const user = createStore(reducer, applyMiddleware(thunk));