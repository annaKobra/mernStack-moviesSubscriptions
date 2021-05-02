import axios from 'axios';
import AuthService from './auth.service';
const API_URL = 'http://localhost:8000/api/members/';

class MembersService {
  async getAllMembers() {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      const res = await axios.get(API_URL);
      return res.data;
    } else {
      sessionStorage.clear();
    }
  }

  async getMember(id) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      const res = await axios.get(API_URL + id);
      return res.data;
    }
  }
  async deleteMember(id) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.delete(API_URL + id);
    }
  }
  async createMember(newMember) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.post(API_URL, newMember);
    }
  }
  async updateMember(memberData) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      await axios.put(API_URL + memberData._id, memberData);
    }
  }
}

export default new MembersService();