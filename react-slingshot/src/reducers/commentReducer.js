import {CREATE_COMMENT, DISPLAY_COMMENTS} from "../constants/main";

const initialState = {
    comments: {

      },
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case(CREATE_COMMENT):
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload.id]:{
                        ...action.payload,
                    },
                },
            };


        default:
            return state;
    }
};

export default commentReducer;
