import userService from '../../services/userService';
export function spendBalance(spendAmount, contact) {
  return async (dispatch) => {
    userService.spendBalance(spendAmount, contact).then((user) => {
      dispatch({ type: 'UPDATE_USER', user });
    });
  };
}
export function singUp(userName) {
  return async (dispatch) => {
    const user = await userService.singUp(userName);
    dispatch({ type: 'UPDATE_USER', user });
  };
}

export const loginFromStorage = (user) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_USER', user });
  };
};

export function getUser() {
  return async (dispatch) => {
    return userService.getUser().then((user) => {
      dispatch({ type: 'GET_USER', ...user });
    });
  };
}
