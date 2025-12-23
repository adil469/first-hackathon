import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Module 1: The Robotic Nervous System (ROS 2)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn about ROS 2 architecture, nodes, topics, services, and URDF for robot description.
        Understand how to create Python ROS 2 nodes and bridge AI agents with ROS controllers.
      </>
    ),
    link: '/docs/module-1/chapter-1/intro',
  },
  {
    title: 'Module 2: The Digital Twin (Gazebo & Unity)',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Explore physics simulation with Gazebo, visualization with Unity, and sensor simulation.
        Create realistic digital twins for robot development and human-robot interaction.
      </>
    ),
    link: '/docs/module-2/chapter-1/intro',
  },
  {
    title: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Master Isaac Sim for synthetic data generation, Isaac ROS for perception,
        and Nav2 for path planning in humanoid robotics applications.
      </>
    ),
    link: '/docs/module-3/chapter-1/intro',
  },
  {
    title: 'Module 4: Vision-Language-Action (VLA)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Build end-to-end autonomous systems with vision-language-action models,
        voice-to-action pipelines, and language-to-actions for intelligent robot behavior.
      </>
    ),
    link: '/docs/vla',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={clsx('text--center', styles.featureContent)}>
        <Link to={link} className={styles.featureTitle}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
