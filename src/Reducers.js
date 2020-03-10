const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      throw new Error();
  }
};
export default Reducer;

