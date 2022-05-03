/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  href: string;
  openInNewTab?: boolean;
}

const StyledLink = styled.a`
  color: red;
  font-family: 'Barlow' serif;
  font-size: 1.1em;

  &:hover {
    text-decoration: underline;
  }
`;

function NavigationLink({ text, href, openInNewTab }: Props) {
  let linkJsx;

  if (openInNewTab) {
    linkJsx = (
      <Link href={href} passHref>
        <StyledLink target="_blank" rel="noopener noreferrer">
          {text}
        </StyledLink>
      </Link>
    );
  } else {
    linkJsx = (
      <Link href={href} passHref>
        <StyledLink rel="noopener noreferrer">{text}</StyledLink>
      </Link>
    );
  }

  return linkJsx;
}

export default NavigationLink;
