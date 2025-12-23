import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Card from '@site/src/components/Card';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start Reading
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Explore Topics
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Custom Feature Cards Component for T015
function FeatureCards() {
  const features = [
    {
      title: 'Physical AI Fundamentals',
      description: 'Learn the core principles of Physical AI and embodied intelligence',
      icon: '🤖',
    },
    {
      title: 'Humanoid Robotics',
      description: 'Deep dive into humanoid robot design, control, and applications',
      icon: '🦾',
    },
    {
      title: 'AI-Native Approaches',
      description: 'Modern AI techniques specifically designed for physical systems',
      icon: '🧠',
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4">
              <Card
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                to="/docs/intro"
                buttonLabel="Learn More"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="AI-Native Book on Physical AI & Humanoid Robotics - Learn Physical AI, Embodied Intelligence, and Humanoid Robotics">
      <HomepageHeader />
      <main>
        <FeatureCards />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
