// Set up your root reducer here...
 import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import postReducer from './postsReducer';

const reducers = combineReducers({
  postReducer,
  commentReducer
});

 export default reducers;
