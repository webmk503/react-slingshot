import {CREATE_AUTHOR, GET_STORAGE, SAVE_AUTHOR} from "../constants/main";

const initialState = {
  authors: {}
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case(CREATE_AUTHOR):
      return {
        ...state,
        authors: {
          ...state.authors,
          [action.payload.id]: {
            ...action.payload,
          }
        },
      };
    case(SAVE_AUTHOR):
      return {
        ...state,
        authors: {
          ...state.authors,
          [action.payload.id]: {
            ...state.authors[action.payload.id],
            name: action.payload.name,
          }
        },
      };
    case(GET_STORAGE):
      return{
        ...state,
        authors: {
          ...action.payload.authors
        }
      };
    default:
      return state;
  }
};

export default authorReducer;
