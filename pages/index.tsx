import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
          <div className={styles.card}>
            <Link href="/assasination">
              <>
                <h2 className={styles.cardHeader}>Assasination</h2>
                <p>Find out about assasination in Sarajevo.</p>
              </>
            </Link>
          </div>
          <div className={styles.card}>

            <Link href="/army">
              <>
                <h2 className={styles.cardHeader}>Army</h2>
                <p>Find out about Serbian army.</p>
              </>
            </Link>
          </div>

          <div className={styles.card}>
            <Link
              href="/battles"
            >
              <>
                <h2 className={styles.cardHeader}>Battles</h2>
                <p>Find out about Serbian battles in WW1</p>
              </>
            </Link>
          </div>

          <div className={styles.card}>
            <Link
              href="/map"
            >
              <>
                <h2 className={styles.cardHeader}>Interactive map</h2>
                <p>
                  Look into Serbian borders throguh WW1.
                </p>
              </>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/janko">
          Author Janko Ljubic.
        </Link>
      </footer>
    </div>
  )
}

export default Home
