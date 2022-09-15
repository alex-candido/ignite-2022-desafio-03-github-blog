import React from 'react';
import logoSrc from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
