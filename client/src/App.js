import LoginPage from './components/login/LoginPage';
import Header from './components/common/Header';
import { useState, useEffect } from 'react';
import AuthService from './services/auth.service';
import MainPage from './components/navigation/MainPage';

function App() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const auth = await AuthService.isAuth();
      setIsAuthUser(auth);
    }
    fetchData();
  }, [])

  return (
    <div>
      {!isAuthUser ? <LoginPage /> : <MainPage /> }
    </div>
  );
}

export default App;
