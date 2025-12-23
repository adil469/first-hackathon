import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './Card.module.css';

// Custom Card Component for T034
export default function Card({
  icon,
  title,
  description,
  to,
  buttonLabel = 'Learn More',
  className,
  ...props
}) {
  return (
    <div className={clsx('card', styles.card, className)} {...props}>
      <div className="card__header">
        <h3 className={clsx('card__title', styles.cardTitle)}>
          {icon && <span className={styles.cardIcon}>{icon}</span>}
          {title}
        </h3>
      </div>
      <div className="card__body">
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className="card__footer">
        {to && (
          <Link className="button button--secondary button--sm" to={to}>
            {buttonLabel}
          </Link>
        )}
      </div>
    </div>
  );
}