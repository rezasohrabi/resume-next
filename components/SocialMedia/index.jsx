import React from 'react';

const SocialMedia = ({ media }) => {
  return (
    <a className='link' href={media.link} target='_blank'>
      <img
        className='icon-wrapper__icon'
        src={media.src}
        title={media.name}
        alt={media.name}
      />
    </a>
  );
};

export default SocialMedia;
