import styles from '../styles/Home.module.css'

export default function Home() {
  return <main className={styles.main}>
    <h1 className='title'>Under<br/>construction</h1>
    <p>This resource is in active development and will be available in the future.</p>
    <div className={styles.note}>
      <small>
        Development began in January 2022.<br/>Initial release in production is expected no earlier than February 2022.
      </small>
    </div>
  </main>
}