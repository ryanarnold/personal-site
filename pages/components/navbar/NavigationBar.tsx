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
      <NavigationLink text="GitHub" href="https://github.com/ryanarnold" openInNewTab />
    </div>
  );
}

export default NavigationBar;
