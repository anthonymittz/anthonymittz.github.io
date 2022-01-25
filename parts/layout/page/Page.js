import styles from './Page.module.css'

export default function Main({children}) {
  return <main className={styles.page}>{children}</main>;
}