import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {//Это ui компонент для кнопки все данные он берёт по старой схеме через и пропс
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
