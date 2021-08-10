import Head from 'next/head'; //Component from Next.js

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Trin Airbnb</title> {/* Affects title in tab */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's build Airbnb</h1>
      
    </div>
  )
}
