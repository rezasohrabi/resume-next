import React from 'react';
import Image from 'next/image';
import { SocialMedia } from '..';
import styles from './Profile.module.scss';

const Profile = ({ profile }) => {
  const medias =
    profile.socialMedias &&
    profile.socialMedias.map((media, index) => (
      <SocialMedia key={index} media={media} />
    ));
  return (
    <section className={`${styles.profile} ${styles.section}`}>
      <div className={styles.profileWrapper}>
        <div className={styles.profile__image}>
          <Image
            src='/ProfileImage.jpg'
            alt='reza sohrabi profile image'
            layout='fill'
          />
        </div>
        <h1>{profile.author}</h1>
        <div className={styles.profile__content}>
          <p>{profile.aboutMe}</p>
          <hr />
          <div>Email : {profile.email}</div>
          <div>Location : {profile.location}</div>
          <div className={styles.iconWrapper}>{medias}</div>
        </div>
        <div className={styles.copyrights}>
          Copyrights <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />{' '}
          {new Date().getFullYear()} Developed by heart
        </div>
      </div>
    </section>
  );
};

export default Profile;
