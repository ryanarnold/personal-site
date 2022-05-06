import React from 'react';
import styled from 'styled-components';
import apps, { techLinks } from '../../content/apps';
import Layout from '../../components/Layout';
import NavigationBar from '../../components/navbar/NavigationBar';
import ExternalLink from '../../components/ExternalLink';

interface Props {}

const AppImage = styled.img`
  width: 100%;
`;

const MadeWithText = styled.p`
  font-size: 0.8rem;
`;

const AppTitle = styled.h3`
  margin-bottom: 0;
  font-weight: 400;
`;

const AppDescription = styled.p`
  margin-top: 0.5rem;
`;

function AppsPage() {
  return (
    <Layout>
      <NavigationBar />
      <p>These are some of the apps I&apos;ve made. Enjoy!</p>
      {apps.map((app) => (
        <div>
          <AppTitle>
            <ExternalLink href={app.link} text={app.title} />
          </AppTitle>
          <AppDescription>{app.description}</AppDescription>
          {app.image ? (
            <a href={app.link} target="_blank" rel="noreferrer">
              <AppImage src={app.image} alt="Secondly Earnings Screenshot" />
            </a>
          ) : (
            ''
          )}
          <MadeWithText>
            Made with{' '}
            {app.madewith.map((stack, index) => {
              const { tech, link } = techLinks.filter((t) => t.tech === stack)[0];

              if (index === 0)
                return (
                  <span>
                    <ExternalLink href={link} text={tech} />
                  </span>
                );
              return (
                <span>
                  , <ExternalLink href={link} text={tech} />
                </span>
              );
            })}
          </MadeWithText>
        </div>
      ))}
    </Layout>
  );
}

export default AppsPage;
