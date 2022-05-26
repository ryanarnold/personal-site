import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { linkColor } from './styles';

interface Props {
  href: string;
  text: string;
}

const StyledLink = styled.a`
  color: #${linkColor};
  &:hover {
    text-decoration: underline;
  }
`;

function ExternalLink({ href, text }: Props) {
  return (
    <Link href={href ?? ''} passHref>
      <StyledLink target="_blank" rel="noopener noreferrer">
        {text}
      </StyledLink>
    </Link>
  );
}

export default ExternalLink;
