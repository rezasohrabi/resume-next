import React from 'react';
import { Profile, Card, LifeStory, AbilityContainer } from '../';
import styles from './Container.module.scss';

const Container = ({ profile, lifeStories, abilities }) => {
  return (
    <div className={styles.container}>
      <Profile profile={profile} />
      <div className={styles.separator}></div>
      <main className={styles.main}>
        <Card title='Life Story' style={{ marginBottom: '15px' }}>
          <div className={styles.timeline}></div>
          {lifeStories.map((story, index) => (
            <LifeStory key={index} story={story} />
          ))}
        </Card>
        <Card title='Abilities'>
          {abilities.map((ability, index) => (
            <AbilityContainer key={index} ability={ability} />
          ))}
        </Card>
      </main>
    </div>
  );
};

export default Container;
