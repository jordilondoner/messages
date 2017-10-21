import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export function messagesReducer(state={isPending: false, messages: []}, action = {}) {
  switch (action.type) {
    case 'MESSAGES_LOADING_FULFILLED':
      return Object.assign({}, state, {
        isPending: false,
        messages: action.payload
      });
    case 'MESSAGES_LOADING_PENDING':
      return Object.assign({}, state, {
        isPending: true,
      });
    default:
      return state;
  }
}

export function usersReducer(state = {isPending: false, users: []}, action = {}) {
  switch (action.type) {
    case 'USERS_LOADING_FULFILLED':
      return Object.assign({}, state, {
        isPending: false,
        users: action.payload
      });
    case 'USERS_LOADING_PENDING':
      return Object.assign({}, state, {
        isPending: true,
      });
    default:
      return state;
  }
}


const rootReducer = combineReducers({
    messages: messagesReducer,
    users: usersReducer
});

export const store = createStore(rootReducer, {}, applyMiddleware(
  promiseMiddleware()
));
