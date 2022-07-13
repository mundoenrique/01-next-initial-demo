import Link from 'next/link';
import { ActiveLink } from './ActiveLink';
import styles from './NavBar.module.css';

export function NavBar() {
  const menuItems = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contac',
    },
    {
      text: 'Pricing',
      href: '/pricing',
    },
  ];

  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((item) => (
        <ActiveLink key={item.href} {...item} />
      ))}
    </nav>
  );
}
