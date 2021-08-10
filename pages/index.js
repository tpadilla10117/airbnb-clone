import Head from 'next/head'; //Component from Next.js

import { Header, Banner } from './utils';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Trin Airbnb</title> {/* Affects title in tab */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      {/* Header will go here */}
      <Header />



      {/* Banner will go here */}
      <Banner />
      
    </div>
  )
}
