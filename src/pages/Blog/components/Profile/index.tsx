import React from 'react';
import ExternalLink from '../../../../components/ExternalLink';
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles';

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/alex-candido.png" />

      <ProfileDetails>
        <header>
          <h1>Alex Candido</h1>

          <ExternalLink text="Github" href="#" />
        </header>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default Profile;
