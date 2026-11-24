import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export const navigationItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export function renderNavLinks(items: NavItem[] = navigationItems): React.ReactNode {
  return items.map((item) => (
    <li key={item.path} className="nav-item">
      <a href={item.path} className="nav-link">
        {item.label}
      </a>
    </li>
  ));
}

export function GlobalNavigation(): JSX.Element {
  return (
    <nav className="global-navigation" aria-label="Main navigation">
      <div className="nav-container">
        <ul className="nav-list">
          {renderNavLinks()}
        </ul>
      </div>
    </nav>
  );
}

export default GlobalNavigation;
