import axios from 'axios';
import AuthService from './auth.service';

const API_URL = 'http://localhost:8000/api/subscriptions/';

class SubscriptionsService {
  async getMembersByMovieId(movieId) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      const res = await axios.get(API_URL + `movie/${movieId}`);
      return res.data;
    } 
  }
  async getMoviesByMemberId(memberId) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      const res = await axios.get(API_URL+'member/'+memberId);
      return res.data;
    } 
  }
  async create(subscriptionData) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      await axios.post(API_URL, subscriptionData);
    }
  }
  async deleteMemberFromSub(id) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      await axios.delete(API_URL + 'memberId/'+id);
    } 
  }
  async deleteMovieFromSub(id) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      await axios.delete(API_URL + 'movieId/'+id);
    } 
  }

}

export default new SubscriptionsService();