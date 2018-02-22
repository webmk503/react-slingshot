import {ADD_POST, CREATE_COMMENT} from "../constants/main";

const initialState = {
  posts: {}
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
    default:
      return state;
  }
};

export default postReducer;
