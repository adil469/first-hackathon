import React, {useState, useCallback} from 'react';
import Navbar from '@theme-original/Navbar';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import {translate} from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';

// Enhanced Navbar component with improved mobile experience and accessibility
export default function NavbarWrapper(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Navbar
        {...props}
        className={clsx(
          'navbar-enhanced',
          mobileMenuOpen && 'navbar-mobile-open'
        )}
      />
    </>
  );
}