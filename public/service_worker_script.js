if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function (registration) {
      console.log('service worker loaded')
    })
    .catch(function (err) {
      console.log(err)
    })
}
