import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const url = process.env.GITHUB_URL
  const myHeaders = {
      'Content-Type': 'application/json',
      'Authorization': process.env.GITHUB_TOKEN,
  }
  const res = await fetch(url, {
    method: 'GET',
    headers: myHeaders
  })
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {data.name}
        </h1>

        <p className={styles.description}>
	  {data.bio} 
        </p>

        <div className={styles.grid}>

          <a href={data.html_url} className={styles.card}>
            <h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg"
                alt="Picture of the author"
                height={28}
              /> Github
	    </h2>
            <p>Development</p>
          </a>

          <a href={`https://twitter.com/`+data.twitter_username} className={styles.card}>
            <h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
                alt="Picture of the author"
                height={28}
              /> Twitter
	    </h2>
            <p>Tweets</p>
          </a>

          <a href={`https://`+data.blog} className={styles.card}>
            <h2>Blog</h2>
            <p>Development</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
	{data.location}
        <a
          href="https://holovin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}
