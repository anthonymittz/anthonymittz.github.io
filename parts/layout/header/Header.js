import styles from './Header.module.css'

import TopNavigation from '../../navigation/TopNavigation/TopNavigation';

export default function Header() {
  return <header className={styles.header}>
      <div className={styles.logotype}>Anthony Mittz</div>
      <nav className={styles.navigation}>
        <TopNavigation />
      </nav>
    </header>
}