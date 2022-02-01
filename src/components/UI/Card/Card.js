import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {// Это ui компонент для контейнера типа карт
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
