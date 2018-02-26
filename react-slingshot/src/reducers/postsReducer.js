import {ADD_POST, CREATE_COMMENT, CHANGE_SEARCH_VALUE, SAVE_AUTHOR, CREATE_AUTHOR} from "../constants/main";

const initialState = {
  posts: {},
  comments: {},
  authors: {},
  searchValue: ''
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case(ADD_POST):
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.id]: {
            ...action.payload,

          },
        },
      };
    case(CREATE_COMMENT):
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.postId]: {
            ...state.posts[action.payload.postId],
            comments: [
              ...state.posts[action.payload.postId].comments,
              action.payload.id
            ]
          },
        }
      };

    case(CHANGE_SEARCH_VALUE):
      return {
        ...state,
        searchValue: action.payload
      };

    default:
      return state;
  }
};

export default postReducer;
