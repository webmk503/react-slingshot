import {CREATE_AUTHOR, CREATE_COMMENT, SAVE_AUTHOR,} from "../constants/main";

const initialState = {
  comments: {},
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case(CREATE_COMMENT):
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    case(SAVE_AUTHOR):
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.commentId]: {
            ...state.comments[action.payload.commentId],
            authorId: action.payload.id,
          }
        }
      };
    default:
      return state;
  }
};

export default commentReducer;
