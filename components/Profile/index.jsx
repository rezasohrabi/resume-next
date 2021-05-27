import React from 'react';
import Image from 'next/image';
import { SocialMedia } from '..';
const Profile = ({ profile }) => {
  const medias =
    profile.socialMedias &&
    profile.socialMedias.map((media, index) => (
      <SocialMedia key={index} media={media} />
    ));
  return (
    <section className='profile section'>
      <div className='profile-wrapper'>
        <Image
          className='profile__image'
          layout='fill'
          src='/ProfileImage.png'
          alt='reza sohrabi profile image'
        />
        <h1>{profile.author}</h1>
        <div className='profile__content'>
          <p>{profile.aboutMe}</p>
          <hr />
          <div>Email : {profile.email}</div>
          <div>Location : {profile.location}</div>
          <div className='icon-wrapper'>{medias}</div>
        </div>
        <div className='copyrights'>
          Copyrights <span dangerouslySetInnerHTML={{ __html: '&copy;' }} />{' '}
          {new Date().getFullYear()} Developed by heart
        </div>
      </div>
    </section>
  );
};

export default Profile;
