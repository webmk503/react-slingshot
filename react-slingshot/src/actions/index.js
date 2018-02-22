import {ADD_POST, CREATE_AUTHOR, CREATE_COMMENT} from "../constants/main";

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

