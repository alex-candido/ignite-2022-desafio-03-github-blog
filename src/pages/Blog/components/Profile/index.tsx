import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            alex-candido
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Fortaleza
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default Profile;
