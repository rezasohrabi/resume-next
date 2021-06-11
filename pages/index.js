import Head from 'next/head';
import { Container } from '../components';
import styles from '../styles/Home.module.scss';
import * as data from './../data';
export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <meta charSet='utf-8' />
        <title>Reza Sohrabi | Resume Website</title>
        <meta
          name='description'
          content='Reza Sohrabi is a front-end developer (react)'
        />
        <meta property='og:type' content='resume website' />
        <meta
          name='og:title'
          property='og:title'
          content='Reza Sohrabi | Resume Website'
        />
        <meta
          name='og:description'
          property='og:description'
          content='Reza Sohrabi is a front-end developer (react)'
        />
        <meta
          name='og:url'
          property='og:url'
          content='http://www.rezasohrabi.com'
        />
        <meta name='og:image' property='og:image' content='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='twitter:title' content='Reza Sohrabi | Resume Website' />
        <meta
          name='twitter:description'
          content='Reza Sohrabi is a front-end developer (react)'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Container {...data} />
    </div>
  );
}
