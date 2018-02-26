import {ADD_POST, SAVE_AUTHOR, CREATE_COMMENT, CHANGE_SEARCH_VALUE, CREATE_AUTHOR} from "../constants/main";

export const createPost = (title, date, authorId, description) => {
  return {
    type: ADD_POST,
    payload: {
      title,
      date,
      authorId,
      description,
      id: `${Math.random()}`,
      comments: []
    },
  }
};

export const changeSearchValue = (value) => {
  return {
    type: CHANGE_SEARCH_VALUE,
    payload: value
  }
};

export const createComment = (authorId, comment, date, postId) => {
  return {
    type: CREATE_COMMENT,
    payload: {
      id: `${Math.random()}`,
      authorId,
      comment,
      date,
      postId
    }
  }
};

export const createAuthor = (obj) => {
  return {
    type: CREATE_AUTHOR,
    payload: obj
  }
};

export const saveAuthor = (obj,) => {
  return {
    type: SAVE_AUTHOR,
    payload: obj

  }
};

