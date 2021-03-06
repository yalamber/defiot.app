import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DefIot - Decentralized Finance and IOT apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Decentralized Finance and Decentralized IOT projects</h1>
        
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
