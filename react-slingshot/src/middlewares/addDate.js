import { ADD_POST, CREATE_COMMENT,CREATE_AUTHOR } from "../constants/main";

const addDate = (store) => (next) => (action) => {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  if(action.type === ADD_POST || action.type === CREATE_AUTHOR || action.type === CREATE_COMMENT) {
    console.log('Create one: ', action.type);
    action.payload.date = new Date().toLocaleString('ru', options);
  }
  next(action);
};

export default addDate;
