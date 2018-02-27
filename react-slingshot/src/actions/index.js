import {
  ADD_POST, SAVE_AUTHOR, CREATE_COMMENT, CHANGE_SEARCH_VALUE, CREATE_AUTHOR, GET_POSTS,
  GET_STORAGE
} from "../constants/main";

export const createPost = (newPost) => {
  return {
    type: ADD_POST,
    payload: newPost,
  }
};

export const changeSearchValue = (value) => {
  return {
    type: CHANGE_SEARCH_VALUE,
    payload: value
  }
};

export const createComment = (newComment) => {
  return {
    type: CREATE_COMMENT,
    payload: newComment
  }
};

export const createAuthor = (newAuthor) => {
  return {
    type: CREATE_AUTHOR,
    payload: newAuthor
  }
};

export const saveAuthor = (changedAuthor) => {
  return {
    type: SAVE_AUTHOR,
    payload: changedAuthor
  }
};

export const getLocalStorage = (gotPosts, gotAuthors, gotComments) => {
  return {
    type: GET_STORAGE,
    payload: {
      posts: gotPosts,
      authors: gotAuthors,
      comments: gotComments
    },
  }
};

