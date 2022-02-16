import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
const favicon = prefix + "/favicon.ico";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Serbian ancestors</title>
        <meta name="description" content="Serbian battles in world war one" />
        <link rel="icon" href={favicon} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Serbia in WW1
        </h1>

        <p className={styles.description}>
          Tribute to my ancestors.
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2 className={styles.cardHeader}>Assasination</h2>
            <p>Find out about assasination in Sarajevo.</p>
          </a>

          <a href="/" className={styles.card}>
            <h2 className={styles.cardHeader}>Army</h2>
            <p>Find out about Serbian army.</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h2 className={styles.cardHeader}>Battles</h2>
            <p>Find out about Serbian battles in WW1</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h2 className={styles.cardHeader}>Interactive map</h2>
            <p>
              Look into Serbian borders throguh WW1.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Author Janko Ljubic.
        </a>
      </footer>
    </div>
  )
}

export default Home
