import { combineReducers } from 'redux';

const messageReducer = (state = {messages: []}, action = null) => {
  const { type, payload} = action;

  switch(type) {
    case 'ADD_MESSAGE':
      return _.extend({}, state, {
        messages: [...state.messages, payload]
      });
    default:
      return state;
  }
};

const taskReducer = (state = {tasks: []}, action = null) => {
  const { type, payload} = action;

  switch(type) {
    case 'ADD_TASK':
      return _.extend({}, state, {
        tasks: [...state.tasks, payload]
      });
    default:
      return state;
  }
};

const reducers = combineReducers({
  messages: messageReducer,
  tasks: taskReducer
});

export default reducers;
