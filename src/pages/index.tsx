import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moment App</title>
        <meta name='description' content='This Application is a To-do List.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>Todo</main>
    </>
  );
}
