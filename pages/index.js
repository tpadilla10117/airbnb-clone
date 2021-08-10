import Head from 'next/head'; //Component from Next.js

import { Header, Banner, SmallCard } from './utils';

export default function Home( { exploreData }) {
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

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

        {/* Pull some data from a server - API endpoints from Sonny Sangha */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map( ({img, distance, location}) => (
              <SmallCard 
                key={ img }
                img={ img }
                distance={ distance }
                location = { location }
              
              />
            ) )}
          </div>

        </section>
      </main>
      
    </div>
  );
}

/* Initiating some static rendering; fetch data from papareact.com: */
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(res => res.json() 

  );

  return {
    //Can return the data as props:
    props: {
      exploreData
    }
  }
};