import {CREATE_COMMENT,} from "../constants/main";

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
    default:
      return state;
  }
};

export default commentReducer;
