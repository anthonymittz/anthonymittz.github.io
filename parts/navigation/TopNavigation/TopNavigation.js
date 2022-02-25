import styles from './TopNavigation.module.css'
import Link from 'next/link'

export default function TopNavigation() {
  return <div className={styles.topNav}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
  </div>
}