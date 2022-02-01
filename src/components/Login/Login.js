import { useEffect,useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');//Состаяние от эмейла 
  const [emailIsValid, setEmailIsValid] = useState();//Состаяния от валидного эмейла
  const [enteredPassword, setEnteredPassword] = useState('');//Состояние пороля 
  const [passwordIsValid, setPasswordIsValid] = useState();//состояние валидного пароля
  const [formIsValid, setFormIsValid] = useState(false);//состояние валидной формы

  useEffect(() => {// Для контроля заполнения всех инпутов
    const identifier = setTimeout(() => {// Здесь идет вызов проверки всех инпутов как для емэйл так и для пороля
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6)// Здесь идет сама проверка
    }, 2500);
    return () => {
      clearTimeout(identifier)// Здесь он его фиксирует по времени что бы код выше не проверялся каждая написанная буква
    }
  }, [setFormIsValid,enteredEmail,enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);//Это функция для реакции по изменению значения емэйл инпута
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);//Это функция для реакции по изменению значения пороля инпута

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')// здесь проверяется валидность формы
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));// Проверка валидности у емэйл инпута
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);// А это для валидности пороля 
  };

  const submitHandler = (event) => {//Это функция будет работать при сабмите формы
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
