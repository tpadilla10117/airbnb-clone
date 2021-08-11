
    import { useRouter } from 'next/dist/client/router';
    import { Header, Footer, InfoCard, Map } from './utils.js';
    import { format } from "date-fns"; //format function from date-fns library

    function Search( { searchResults } ) {

    /* Use ES6 destructuring to grab query data from search that we can use in the component: */
        const router = useRouter();
        const { location, startDate, endDate, noOfGuests } = router.query;

    /* Use the format obj fromdate-fns to format the date objects in the UI: */
        const formattedStartDate = format(new Date(startDate), "dd MMMM yy" );
        const formattedEndDate = format(new Date(endDate), "dd MMMM yy" );
    /* Pass ' range ' for the dates */
        const range = `${formattedStartDate} - ${formattedEndDate}`;

        /* console.log(router.query) */

        return (
            <div>
                <Header placeholder={ `${location} | ${range} | ${noOfGuests} guests` } />

                    <main className="flex">

                        <section className="flex-grow pt-14 px-6">
                            <p className="text-xs">300+ Stays - {range} - for { noOfGuests } guests</p>

                            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in { location }</h1>

                            <div className="hidden lg:inline-flex mb-5 spce-x-3 text-gray-800 whitespace-nowrap">
                                <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Cancellation Flexibility</p>

                                {/* Here I re-use the utility tailwind css classes in global.css: */}
                                <p className="button">Type of Place</p>
                                <p className="button">Price</p>
                                <p className="button">Rooms and Beds</p>
                                <p className="button">More filters</p>

                            </div>

                        {/* Here I map out the images and Card for the search Query: */}
                            <div className="flex flex-col">
                                {searchResults.map( ({ img, location, title, description, star, price, total }) => (
                                    <InfoCard 
                                        key={img} //better to use an id
                                        img={img}
                                        location={location}
                                        title={title}
                                        description={description}
                                        star={star}
                                        price={price}
                                        total={total}
                                    />
                                )) }
                            </div>

                        </section>

                    {/* This is where I utililize mapbox integration: */}
                        <section className="hidden xl:inline-flex xl:min-w-[600px]">
                            <Map />
                        </section>



                    </main>

                <Footer />
            </div>
        );
    };

    export default Search;

/* Take care of server-side rendering here: */
    export async function getServerSideProps() {
        const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json() );

        return {
            props: {
                searchResults,
            },
        };

    };