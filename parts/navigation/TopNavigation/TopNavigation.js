import styles from './TopNavigation.module.css'

export default function TopNavigation() {
  return <div className={styles.topNav}>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
}