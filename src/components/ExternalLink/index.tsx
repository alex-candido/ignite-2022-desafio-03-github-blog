import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ComponentProps } from 'react';
import { ExternalLinkContainer } from './styles';

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ text, ...rest }) => {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </ExternalLinkContainer>
  );
};

export default ExternalLink;
