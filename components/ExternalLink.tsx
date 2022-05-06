import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  text: string;
}

const StyledLink = styled.a`
  color: red;
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
