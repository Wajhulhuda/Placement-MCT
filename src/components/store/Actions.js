// All action creater which is returning actions

const actions = (productData) => {
  return {
    type: "CLICK",
    payload: productData,
  };
};

const allUserAction = (users) => {
  return {
    type: "ALL",
    payload: users,
  };
};
const maleUserAction = (users) => {
  return {
    type: "MALE",
    payload: users,
  };
};
const femaleUserAction = (users) => {
  return {
    type: "FEMALE",
    payload: users,
  };
};
export default actions;
export { allUserAction, maleUserAction, femaleUserAction };
