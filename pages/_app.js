import '../styles/globals.css'

console.log('is child process?', !!process.connected)

// Print the message sent from the parent process.
process.on('message', console.log)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
