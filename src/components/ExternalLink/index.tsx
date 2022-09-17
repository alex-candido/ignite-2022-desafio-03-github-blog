import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ComponentProps, ReactNode } from 'react';
import { ExternalLinkContainer } from './styles';

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: 'iconLeft';
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ text, icon, ...rest }) => {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  );
};

export default ExternalLink;
