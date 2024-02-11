const userReducer = (state, action) => {
  switch (action.type) {
    case "add":
      state = { value: action.payload };
      break;
    case "remove":
      state = { value: action.payload };
      break;
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
  return state;
};

export default userReducer;
