import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import { LayoutContainer } from './styles';

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

export default DefaultLayout;
