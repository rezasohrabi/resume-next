import React from 'react';

const Card = ({ title, children, style }) => {
  return (
    <section className='section' style={style}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Card;
