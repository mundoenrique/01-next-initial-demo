import Head from 'next/head';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';

export function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contac app</title>
        <meta name="description" content="my app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
