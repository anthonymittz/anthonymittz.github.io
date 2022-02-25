import Link from 'next/link'
import styles from './TopNavigation.module.css'

export default function TopNavigation() {
  return <div className={styles.topNav}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
  </div>
}