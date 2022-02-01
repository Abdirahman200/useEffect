import React, { useEffect,useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);//Это состояние авторизации

  useEffect(() => {
    const storageUserLoggetInfo = localStorage.getItem("isLoggetIn");// Мы тут ищем в локал сторэйч елемент с ключом isLoggetIn а создаем его ниже

    if(storageUserLoggetInfo === "1"){//Здесь делаем условную проверку равна ли значение елемента 1
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {// Функция для авторизации
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggetIn", "1")//Здесь мы уже закидываем елемент в локал сторэйч
    setIsLoggedIn(true);//Мы меняем состояние авторизации на true
  };

  const logoutHandler = () => {// Функция для выхода из акаунта 
    setIsLoggedIn(false);//Делает состояние авторизации на false
    localStorage.removeItem("isLoggetIn")// И удаляет из локал сторэйчжа созданный елемент
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
