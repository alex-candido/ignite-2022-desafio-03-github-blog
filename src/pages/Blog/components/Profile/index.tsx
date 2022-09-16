import React from 'react';
import { ProfileContainer, ProfilePicture } from './styles';

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/alex-candido.png" />
    </ProfileContainer>
  );
};

export default Profile;
