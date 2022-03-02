import '../styles/index.css'
import Layout from '../parts/layout/Layout'
import {SwitchTransition, CSSTransition} from 'react-transition-group'

function MyApp({ Component, pageProps, router }) {
  return <Layout currentPath={router.pathname}>
    <SwitchTransition mode="out-in">
      <CSSTransition key={router.pathname} classNames="page" timeout={300} appear={true}>
        <div className="page">
          <Component {...pageProps} />
        </div>
      </CSSTransition>
    </SwitchTransition>
  </Layout>
}

export default MyApp
