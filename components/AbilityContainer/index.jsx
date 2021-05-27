import React from 'react';

const AbilityContainer = ({ ability }) => {
  return (
    <section className='ability-wrapper'>
      <div className='header'>{ability.field}</div>
      <div className='skill-wrapper'>
        {ability.skills.map((skill, index) => (
          <a key={index} className='skill' href={skill.link} target='_blank'>
            <img className='skill__image' src={skill.icon} />
            <div>{skill.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AbilityContainer;
