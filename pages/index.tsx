import { AppProps } from 'next/app'
import Head from 'next/head'
import HomeMain from './home'
import Navbar from '../components/navbar'

export default function Home({ Component,pageProps,router } : AppProps) {
  
  console.log(router)

  return (
    <>
      <Head>
        <title> Lazy Media </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain/>
      {/* <Component {...pageProps}></Component> */}
    </>
  )
}