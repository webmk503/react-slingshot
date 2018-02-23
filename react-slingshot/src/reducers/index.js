// Set up your root reducer here...
 import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import postReducer from './postsReducer';
import authorReducer from './authorReducer';

const reducers = combineReducers({
  postReducer,
  commentReducer,
  authorReducer
});

 export default reducers;
