import type { AppProps } from 'next/app'
import Head from 'next/head'
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
    <>
      <Head>
        <link rel="stylesheet" href="/nprogress.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
