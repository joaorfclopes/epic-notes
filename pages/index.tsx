import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Index.module.css'
import { Note } from '../utils/types'

interface IndexProps {
  notes: Array<Note>
}

function Index(props: IndexProps) {
  const { notes } = props

  return (
    <div className={styles.container}>
      <Head>
        <title>Epic Notes</title>
        <meta
          name="description"
          content="Notes app for Kent C. Dodds Epic React course"
        />
        <meta name="msapplication-TileColor" content="#9ed3c9" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Navbar />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL as string)
  const notes = await res.json()

  return {
    props: { notes }
  }
}

export default Index
