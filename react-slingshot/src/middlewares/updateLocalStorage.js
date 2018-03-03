import {ADD_POST, CREATE_COMMENT, CREATE_AUTHOR, SAVE_AUTHOR} from "../constants/main";
import {updateAuthor, updateComments, updatePosts} from "../utils/localStorage";


const updater = (store) => (next) => (action) => {

  if (action.type === SAVE_AUTHOR) {
    updateAuthor(action.payload);
  } else if (action.type === ADD_POST) {
    updatePosts(action.payload);
  } else if (action.type === CREATE_COMMENT) {
    updateComments(action.payload);
  } else if (action.type === CREATE_AUTHOR) {
    updateAuthor(action.payload);
  }

  next(action);

};

export default updater;
