/* Header functional component: */
    import { useState } from "react";
    import Image from 'next/image'; //Next.js img tag
    import 'react-date-range/dist/styles.css'; // main style file from react-date-range library
    import 'react-date-range/dist/theme/default.css'; // theme css file
    import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'; //Importing icon from heroicons

    import { DateRangePicker } from 'react-date-range';
    import { useRouter } from "next/dist/client/router";

    function Header( {placeholder} ) {

    /* Use the custom react router (hook) built into Next.js: */
        const router = useRouter();

    /* State that Handles SearchInput values: */
        const [ searchInput, setSearchInput ] = useState("");
    
    /* State that Handles StartDate & End Datein the Calander: */
        const [ startDate, setStartDate ] = useState( new Date() );
        const [ endDate, setEndDate ] = useState( new Date() );

    /* State for number of guests inputted in the calendar, it keeps track of them: */
        const [ noOfGuests, setNoOfGuests ] = useState(1);

        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: 'selection'
        }

    /* This Handler handles the changes for when a user clicks a date-range in the Calendar: */

        const handleSelect = (ranges) => {
            setStartDate( ranges.selection.startDate );
            setEndDate( ranges.selection.endDate );
        };

    /* This function resets the calendar input upon Cancel click: */
        const resetInput = () => {
            setSearchInput('');
        };

    /* This search function allows us to use query-parameters to add into url and retain search data:  */
    /* Used for the search button in the calendar */
        const search = () => {
            router.push( {
                pathname: '/search',
                query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuests,
                },
            })
        }

        return (
            <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10"> 
                

                {/* Left-Hand side section: */}
                <div className='relative flex items-center h-10 cursor-pointer my-auto' onClick={ () => router.push("/") }>
                    <Image src='https://links.papareact.com/qd3'
                        layout="fill"
                        objectFit="contain"/* Stops from changing aspect ratio */
                        objectPosition="left"
                    />
                </div>

                {/* Middle Section (Search bar) */}
                <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
                    <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type='text' placeholder={placeholder || "Start your search"} value={searchInput} onChange={ (event) => setSearchInput(event.target.value) } />

                    <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
                </div>

                {/* Right Section: */}
                <div className="flex items-center space-x-4 justify-end text-gray-500" >

                    <p className="hidden md:inline cursor-pointer">Become a host</p>

                    <GlobeAltIcon className="h-6 cursor-pointer" />

                    <div className="flex items-center space-x-2 border-2 p-2 rounded-full" >
                        <MenuIcon className="h-6" />

                        <UserCircleIcon className="h-6" />

                    </div>

                </div>

            {/* This let's me toggle a Calander: */}
                {searchInput && (
                    <div className="flex flex-col col-span-3 mx-auto mt-10">
                        <DateRangePicker 
                            ranges={ [ selectionRange ] }
                            minDate={ new Date() }
                            rangeColors={ ["#FD5B61"] }
                            onChange={ handleSelect }
                        />

                        <div className="flex items-center border-b mb-4">
                            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

                            <UsersIcon className="h-5" />

                        {/* Where the input is handled for Guests: */}
                            <input type="number" 
                            className="w-12 pl-2 text-lg outline-none text-red-400" 
                            value={noOfGuests}
                            type="number"
                            min={1}
                            onChange={ (event ) => setNoOfGuests(event.target.value) }
                            />

                        </div>

                        <div className="flex">

                            <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
                            <button className="flex-grow text-red-400" onClick={search}>Search</button>

                        </div>

                        

                    </div> 
                )}
                

            </header>
        );
    };

    export default Header;