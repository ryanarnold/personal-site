import React from 'react';
import apps, { techLinks } from '../../content/apps';
import Layout from '../../components/Layout';
import NavigationBar from '../../components/navbar/NavigationBar';
import ExternalLink from '../../components/ExternalLink';

interface Props {}

function AppsPage() {
  return (
    <Layout>
      <NavigationBar />
      <p>These are some of the apps I&apos;ve made. Enjoy!</p>
      {apps.map((app) => (
        <div>
          <h3>{app.title}</h3>
          <p>{app.description}</p>
          <p>
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
          </p>
        </div>
      ))}
    </Layout>
  );
}

export default AppsPage;
