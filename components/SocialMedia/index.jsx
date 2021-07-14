import React from 'react';
import Image from 'next/image';
import styles from './SocialMedia.module.scss';

const SocialMedia = ({ media }) => {
  return (
    <a className={styles.link} href={media.link} target='_blank'>
      <div className={styles.iconWrapper__icon}>
        <Image
          src={media.src}
          title={media.name}
          alt={media.name}
          width='40'
          height='40'
        />
      </div>
    </a>
  );
};

export default SocialMedia;
