import { combineReducers } from "redux";

//reducer for managing product details
const initialState = { name: "Wajhul" };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      return action.payload;
    default:
      return state;
  }
};

//filtering male users
const handleMale = (allUser) => {
  let male = allUser.filter((item) => item.gender === "male");
  return male;
};

//filtering only female users
const handleFemale = (allUser) => {
  let female = allUser.filter((item) => item.gender === "female");
  return female;
};

//for all users
const handleAll = (allUser) => {
  return allUser;
};

//reducer for managing users
const initial = [];
const userReducer = (state = initial, action) => {
  switch (action.type) {
    case "MALE":
      return handleMale(action.payload.payload);
    case "FEMALE":
      return handleFemale(action.payload.payload);
    case "ALL":
      return handleAll(action.payload.payload);
    default:
      return state;
  }
};
const rootReducer = combineReducers({ reducer, userReducer });
export default rootReducer;
