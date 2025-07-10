import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
      <script src="https://kit.fontawesome.com/ea8a7c0c54.js" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}