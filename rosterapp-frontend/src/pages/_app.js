import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  console.log(pageProps);
  return(
    <Component {...pageProps} />
  ) 
}
