import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useState } from 'react';
import AuthService from '../../services/auth.service';
import Header from '../common/Header';


const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({username: '', password: ''});
  const [errorMessage, setErrorMessage] = useState('');

  // get Token from server: {acssesToken: '', name: ''}
  const handleLogin = async (event) => {
    event.preventDefault();
    const data = await AuthService.login(credentials);

    sessionStorage.setItem('token', data.accessToken);
    sessionStorage.setItem('fullName', data.name);

    if(!data.accessToken)
      setErrorMessage('Login Failed, Try Again');
    else {
      setErrorMessage('');
      window.location.reload();

    }
  }

    return(
      <>
      <Header />
      <form onSubmit={handleLogin}>
        <label>User name:</label>
        <input type="text" value={credentials.username} onChange={e => setCredentials({...credentials, username: e.target.value})} /><br />

        <label>Password</label>
        <input type="password" value={credentials.password} onChange={e => setCredentials({...credentials, password: e.target.value})} /><br/>

        <input type="submit" value="Login" />
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
      </form>
      </>
    );
}

export default LoginPage;