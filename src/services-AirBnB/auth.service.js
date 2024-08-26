import { users } from '../Data/users';

const SESSION_KEY = 'user';

export const authService = {
  login,
  logout,
  getCurrentUser
};

async function login(name = '') {
  if (name === 'einav') {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(users[0]));
  } else if (name === 'ari') {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(users[1]));
  }
}

async function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}

async function getCurrentUser() {
  const user = sessionStorage.getItem(SESSION_KEY);
  return user ? JSON.parse(user) : null;
}
