import { FC } from 'react';
import Head from 'next/head';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';

interface Props {
  children: React.ReactNode;
}

export function MainLayout({ children }: Props) {
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
