import axios from 'axios';
import AuthService from './auth.service';

const API_URL = 'http://localhost:8000/api/movies/';

class MoviesService {
  async getMovies() {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      const res = await axios.get(API_URL);
      return res.data;
    } else {
      sessionStorage.clear();
    }
  }
  async deleteMovie(id) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.delete(API_URL + id)
    }  else {
      sessionStorage.clear();
    }
  }
  async getMovie(id) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      const res = await axios.get(API_URL + id);
      return res.data;
    } else {
      sessionStorage.clear();
    }
  }
  async updateMovie(movieData) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      await axios.put(API_URL + movieData._id, movieData);
    } else {
      sessionStorage.clear();
    }
  }
  async addMovie(movieData) {
    const isAuth = await AuthService.isAuth();
    if(isAuth) {
      await axios.post(API_URL, movieData);
    } else {
      sessionStorage.clear();
    }
  }
}

export default new MoviesService();