import React from 'react';
import NavigationLink from './NavigationLink';

interface Props {}

function NavigationBar({}: Props) {
  return (
    <div>
      <h1>zoleta.io</h1>
      <NavigationLink text="About" href="/" />
      <NavigationLink text="Apps" href="/apps" />
      <NavigationLink text="Blog" href="/blog" />
    </div>
  );
}

export default NavigationBar;
