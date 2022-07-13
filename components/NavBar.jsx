import { ActiveLink } from './ActiveLink';
import styles from './NavBar.module.css';

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

export function NavBar() {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((item) => (
        <ActiveLink key={item.href} {...item} />
      ))}
    </nav>
  );
}
