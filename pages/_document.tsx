import Document, { Head, Html, Main, NextScript } from 'next/document'

function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme')
    const hasPreferenceString = typeof preference === 'string'

    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (hasPreferenceString) {
      return preference
    }

    // If there is no saved preference, use a media query
    const mediaQuery = '(prefers-color-scheme: dark)'
    const mql = window.matchMedia(mediaQuery)

    const hasPreferenceBoolean = typeof mql.matches === 'boolean'
    if (hasPreferenceBoolean) {
      return mql.matches ? 'dark' : 'light'
    }

    // default to 'dark'.
    return 'dark'
  }

  const colorMode = getInitialColorMode()
  const root = document.documentElement
  root.style.setProperty('--initial-color-mode', colorMode)

  // add HTML attribute if dark mode
  if (colorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
}

// our function needs to be a string
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
