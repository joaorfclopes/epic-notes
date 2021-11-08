import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', (url: string) => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', (url: string) => {
    NProgress.done()
  })

  return (
    <Layout>
      <link rel="stylesheet" href="/nprogress.css" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
