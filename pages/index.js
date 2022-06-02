import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viktor Holovin</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Viktor Holovin
        </h1>

        <p className={styles.description}>
	  Web developer
        </p>

        <div className={styles.grid}>
          <a href="https://blog.holovin.com/" className={styles.card}>
            <h2>Blog</h2>
            <p>Coding</p>
          </a>

          <a href="https://github.com/holovin777" className={styles.card}>
            <h2>GitHub</h2>
            <p>Developing</p>
          </a>

          <a href="https://instagram.com/holovin777" className={styles.card}>
            <h2>Instagram</h2>
            <p>Photos</p>
          </a>

          <a
            href="https://facebook.com/holovin/"
            className={styles.card}
          >
            <h2>Facebook</h2>
            <p>Social</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://holovin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
	  Viktor Holovin
        </a>
      </footer>
    </div>
  )
}
