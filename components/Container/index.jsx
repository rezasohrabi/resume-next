import React from 'react';
import { Profile, Card, LifeStory, AbilityContainer } from '../';

const Container = ({ profile, lifeStories, abilities }) => {
  return (
    <div className='container'>
      <Profile profile={profile} />
      <div className='separator'></div>
      <main className='main'>
        <Card title='Life Story' style={{ marginBottom: '15px' }}>
          <div className='timeline'></div>
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
