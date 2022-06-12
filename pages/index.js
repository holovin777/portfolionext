import Head from 'next/head'
import Image from 'next/image'
import ThemeChanger from '../components/themechanger'
import Social from '../components/social'
import Footer from '../components/footer'
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

      <ThemeChanger />

      <main className={styles.main}>
        <h1 className={styles.title}>
          {data.name}
        </h1>

        <p className={styles.description}>
	  <b>{data.bio}</b>
        </p>

        <div className={styles.grid}>

	  <Social url={data.html_url} name="GitHub" picture="/github.svg" description="Development" />
	  <Social url={`https://twitter.com/`+data.twitter_username} name="Twitter" picture="/twitter.svg" description="Tweets" />
	  <Social url={`https://`+data.blog} name="Blog" picture="/logonextblog.svg" description="Blog generated from GitHub" />

        </div>
      </main>
      <Footer location={data.location} />
    </div>
  )
}
