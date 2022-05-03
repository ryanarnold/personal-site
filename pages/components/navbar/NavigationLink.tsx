/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  href: string;
  openInNewTab?: boolean;
}

function NavigationLink({ text, href, openInNewTab }: Props) {
  let linkJsx;

  if (openInNewTab) {
    linkJsx = (
      <Link href={href} passHref>
        <a target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </Link>
    );
  } else {
    linkJsx = <Link href={href}>{text}</Link>;
  }

  return linkJsx;
}

export default NavigationLink;
