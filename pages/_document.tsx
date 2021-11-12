import Document, { Head, Html, Main, NextScript } from 'next/document'

function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme')
    const hasPreferenceString = typeof preference === 'string'

    if (hasPreferenceString) {
      return preference
    }

    const mediaQuery = '(prefers-color-scheme: dark)'
    const mql = window.matchMedia(mediaQuery)

    const hasPreferenceBoolean = typeof mql.matches === 'boolean'
    if (hasPreferenceBoolean) {
      return mql.matches ? 'dark' : 'light'
    }

    return 'dark'
  }

  const colorMode = getInitialColorMode()
  const root = document.documentElement
  root.style.setProperty('--initial-color-mode', colorMode)

  if (colorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
}

const blockingSetInitialColorMode = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})()
`

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Notes app for Kent C. Dodds Epic React course"
          />
          <meta name="msapplication-TileColor" content="#9ed3c9" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
