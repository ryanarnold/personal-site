import React from 'react';
import styled from 'styled-components';
import NavigationLink from './NavigationLink';

const NavigationBarDiv = styled.div`
  text-align: center;
`;

const NavigationHeader = styled.h1`
  font-family: 'Roboto Mono', serif;
  font-size: 2.2rem;
  font-weight: lighter;
`;

const Divider = styled.hr`
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #cacaca;
`;

function NavigationBar() {
  return (
    <NavigationBarDiv>
      <NavigationHeader>zoleta.io</NavigationHeader>
      <NavigationLink text="About" href="/" />・
      <NavigationLink text="Apps" href="/apps" />・
      <NavigationLink text="Blog" href="/blog" />・
      <NavigationLink text="GitHub" href="https://github.com/ryanarnold" openInNewTab />
      <Divider />
    </NavigationBarDiv>
  );
}

export default NavigationBar;
