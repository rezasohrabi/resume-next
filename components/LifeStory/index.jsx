import React from 'react';
import styles from './LifeStory.module.scss';

const LifeStory = ({ story }) => {
  return (
    <section className={styles.story}>
      <div className={styles.story__date}>{story.time}</div>
      <a className={styles.story__link} href={story.fromLink} target='_blank'>
        <img className={styles.story__image} src={story.image} />
      </a>
      <div className={styles.story__info}>
        <div className={styles.header}>{story.title}</div>
        <div>
          At :{' '}
          <a className={styles.fromLink} href={story.fromLink} target='_blank'>
            {story.from}
          </a>
        </div>
        <div className={styles.desc}>{story.description}</div>
      </div>
    </section>
  );
};

export default LifeStory;
