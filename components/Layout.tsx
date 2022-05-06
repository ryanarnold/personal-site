import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr) 1fr minmax(auto, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 10%;
  }

  @media (max-width: 900px) and (min-width: 601px) {
    grid-template-columns: 0.3fr 1fr 0.3fr;
  }

  @media (max-width: 1200px) and (min-width: 901px) {
    grid-template-columns: 0.5fr 1fr 0.5fr;
  }
`;

interface Props {
  children: any;
}

function Layout({ children }: Props) {
  return (
    <Container>
      <div />
      <div>{children}</div>
      <div />
    </Container>
  );
}

export default Layout;
