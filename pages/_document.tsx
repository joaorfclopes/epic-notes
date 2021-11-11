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
        <Head />
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
