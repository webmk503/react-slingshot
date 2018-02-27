import { ADD_POST, CREATE_COMMENT, CHANGE_SEARCH_VALUE, GET_STORAGE } from "../constants/main";

const initialState = {
  posts: {},
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
    case(GET_STORAGE):
      return {
        ...state,
        posts: action.payload.posts
      };
    default:
      return state;
  }
};

export default postReducer;
