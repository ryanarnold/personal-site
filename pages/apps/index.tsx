import React from 'react';
import apps from '../../content/apps';
import Layout from '../components/Layout';
import NavigationBar from '../components/navbar/NavigationBar';

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
            {app.madewith.map((tech, index) => {
              if (index === 0) return <span>{tech}</span>;
              return <span>, {tech}</span>;
            })}
          </p>
        </div>
      ))}
    </Layout>
  );
}

export default AppsPage;
