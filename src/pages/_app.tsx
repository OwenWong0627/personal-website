import "../styles/globals.css";
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function PortfolioApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Owen Wong | owenwong.me</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>
      <meta
        property='og:description'
        content='A personal portfolio website for Owen Wong. 
          Computer Science Student at the University of Waterloo. Interested in Javascript, React, and front-end development.
        '
      />
      <meta
        name='description'
        content='A personal portfolio website for Owen Wong. 
        Computer Science Student at the University of Waterloo. Interested in Javascript, React, and front-end development.
        '
      />
      <meta
        property='og:title'
        content='Owen Wong | owenwong.me'
        key='title'
      />
      <meta property='og:url' content={'https://owenwong.me'} />
      <link rel='canonical' href={'https://owenwong.me'} />
    </Head>
    <Component {...pageProps} />
  </>
}
