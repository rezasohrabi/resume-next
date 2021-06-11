import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, children, style }) => {
  return (
    <section className={styles.section} style={style}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Card;
