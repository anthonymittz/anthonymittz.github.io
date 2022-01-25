import styles from './Layout.module.css'
import Head from './head/Head'

import Header from './header/Header'
import Footer from './footer/Footer'
import Page from './page/Page'

export default function Layout({children}) {
  return <div className={styles.container}>
    <Head />
    <Header />
    <Page>
      {children}
    </Page>
    <Footer />
  </div>
}