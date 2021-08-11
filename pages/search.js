
    import { Header, Footer } from './utils.js';

    function Search() {
        return (
            <div>
                <Header />

                    <main className="flex">

                        <section>
                            <p className="text-xs">300+ Stays for 5 number of guests</p>

                            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

                            <div className="hidden lg:inline-flex">
                                <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">Cancellation Flexibility</p>

                                {/* Here I re-use the utility tailwind css classes in global.css: */}
                                <p className="button">Type of Place</p>
                                <p className="button">Price</p>
                                <p className="button">Rooms and Beds</p>
                                <p className="button">More filters</p>

                            </div>

                        </section>

                    </main>

                <Footer />
            </div>
        );
    };

    export default Search;