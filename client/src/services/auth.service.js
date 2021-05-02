import axios from "axios";

const API_URL = "http://localhost:8000/api/users/";

class AuthService {
  async login(adminData) {
    try {
      const res = await axios.post(API_URL + "login", adminData);
      return res.data;
    } catch {
      return {accessToken: '', name: ''};
    }
  }

  logout() {
    sessionStorage.clear();
    window.location.replace('/');
  }

  async isAuth() {
    if(sessionStorage.getItem('token')) {
      try {
        await axios.post(API_URL + "auth", {accessToken: sessionStorage['token']})
        return true;
      } catch {
        return false;
      }
    } else {
      return false;
    }
  }
}

export default new AuthService();