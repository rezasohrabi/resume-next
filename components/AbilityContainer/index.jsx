import React from 'react';
import styles from './AbilityContainer.module.scss';

const AbilityContainer = ({ ability }) => {
  return (
    <section className={styles.abilityWrapper}>
      <div className={styles.header}>{ability.field}</div>
      <div className={styles.skillWrapper}>
        {ability.skills.map((skill, index) => (
          <a
            key={index}
            className={styles.skill}
            href={skill.link}
            target='_blank'
          >
            <img className={styles.skill__image} src={skill.icon} />
            <div>{skill.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AbilityContainer;
