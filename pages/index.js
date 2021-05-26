import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Reza Sohrabi | Resume Website</title>
        <meta name="description" content="Reza Sohrabi is a front-end developer (react)" />
        <meta property='og:type' content='resume website' />
        <meta name='og:title' property='og:title' content='Reza Sohrabi | Resume Website' />
        <meta name='og:description' property='og:description' content='Reza Sohrabi is a front-end developer (react)' />
        <meta name='og:url' property='og:url' content='http://www.rezasohrabi.com' />
        <meta name='og:image' property='og:image' content='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='twitter:title' content='Reza Sohrabi | Resume Website' />
        <meta name='twitter:description' content='Reza Sohrabi is a front-end developer (react)' />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </div>
  )
}
