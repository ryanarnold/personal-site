import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  href: string;
}

function NavigationLink({ text, href }: Props) {
  return <Link href={href}>{text}</Link>;
}

export default NavigationLink;
