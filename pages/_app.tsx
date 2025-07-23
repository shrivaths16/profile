import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Script from 'next/script'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // This creates a CSS variable for Tailwind
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
      <div className={'${montserrat.variable} font-sans'}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Script 
        src="https://kit.fontawesome.com/ea8a7c0c54.js" 
        crossOrigin="anonymous"
        strategy="afterInteractive" 
      />

      <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}