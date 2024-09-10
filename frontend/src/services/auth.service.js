import axios from 'axios';
import { users } from '../Data/users';
const URL = 'http://localhost:3030/api/auth'
const SESSION_KEY = 'user';

export const authService = {
  login,
  logout,
  getCurrentUser
};

async function login(name) {
  const username = {
    username:name
  }
  const response = await axios.post(`${URL}/login`,username)
  console.log(response.data)
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(response.data));
  return getCurrentUser()
}

async function logout() {
  const response = await axios.post(`${URL}/logout`)
  sessionStorage.removeItem(SESSION_KEY);
}

 function getCurrentUser() {
  const user = sessionStorage.getItem(SESSION_KEY);
  return user ? JSON.parse(user) : null;
}
