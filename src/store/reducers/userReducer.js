const INITIAL_STATE = {
  user: { name: '', coins: null, moves: [] },
};
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...action.user },
      };
    case 'GET_USER':
      return {
        ...state,
        user: { ...action.user },
      };
    default:
      return state;
  }
}
