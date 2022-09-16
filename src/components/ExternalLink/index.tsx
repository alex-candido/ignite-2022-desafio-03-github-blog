import React, { ComponentProps } from 'react';
import { ExternalLinkContainer } from './styles';

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ text, ...rest }) => {
  return <ExternalLinkContainer {...rest}>{text}</ExternalLinkContainer>;
};

export default ExternalLink;
