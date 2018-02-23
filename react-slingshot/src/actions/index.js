import {ADD_POST, SAVE_AUTHOR, CREATE_COMMENT, CHANGE_SEARCH_VALUE} from "../constants/main";

export const createPost = (title, date, author, description) => {
  return {
    type: ADD_POST,
    payload: {
      title,
      date,
      author,
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

export const createComment = (authorName, comment, date, postId) => {
  return {
    type: CREATE_COMMENT,
    payload: {
      id: `${Math.random()}`,
      authorName,
      comment,
      date,
      postId
    }
  }
};

export const saveAuthor = (id, author,commentId) => {
  return {
    type: SAVE_AUTHOR,
    payload: {
      id,
      author,
      commentId
    }

  }
};

