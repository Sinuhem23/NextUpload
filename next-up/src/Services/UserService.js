import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api';
class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL + '/all-users');
  }

  createUser(user) {
    return axios.post(USER_API_BASE_URL + '/add-user', user);
  }

  getUserById(id) {
    return axios.get(USER_API_BASE_URL + '/user/' + id);
  }
  getUserByUserName(userName) {
    return axios.get(USER_API_BASE_URL + '/users/username/' + userName);
  }

  updateUser(user, id) {
    return axios.put(USER_API_BASE_URL + '/user/' + id, user);
  }

  deleteUser(id) {
    return axios.delete(USER_API_BASE_URL + '/user/' + id);
  }
}

export default new UserService();
