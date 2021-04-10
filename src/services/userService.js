import { storageService } from './storageService';
export default {
  getUser,
  singUp,
  spendBalance,
};
const USERS_KEY = 'users';
function getUser() {
  const user = storageService.load(USERS_KEY);
  if (user) return Promise.resolve(user);
}

function singUp(userName) {
  const emptyUser = _getEmptyUser();
  emptyUser.name = userName;
  storageService.store(USERS_KEY, emptyUser);
  return Promise.resolve(emptyUser);
}

async function spendBalance(spendAmount, contact) {
  try {
    debugger;
    const user = storageService.load(USERS_KEY);
    user.coins = user.coins - spendAmount;
    const move = `${user.name} proses $${spendAmount} to ${contact.name}`;
    user.moves = [...user.moves, move];
    storageService.store(USERS_KEY, user);
    return user;
  } catch (error) {
    console.error('Can not pay:', error);
  }
}

function _getEmptyUser() {
  return {
    name: '',
    coins: 100,
    moves: [],
  };
}
