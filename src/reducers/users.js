const usersList = require("../user_data.json");

const defaultState = {
  searchString: "",
  users: usersList
};
const users = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_CRITERIA":
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

export { users };
