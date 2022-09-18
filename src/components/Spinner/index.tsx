import React from 'react';
import { SpinnerContainer } from './styles';

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <div>
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </div>
    </SpinnerContainer>
  );
};

export default Spinner;
