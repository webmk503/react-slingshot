import {CREATE_AUTHOR} from "../constants/main";

const initialState = {
  author: {}
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case(CREATE_AUTHOR):
      return {
        ...state,
        author: {
          ...state.author,
          [action.payload.id]: {
            ...action.payload,
          }
        },
      };

    default:
      return state;
  }
};

export default authorReducer;
