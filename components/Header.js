/* Header functional component: */
    import { useState } from "react";
    import Image from 'next/image'; //Next.js img tag
    import 'react-date-range/dist/styles.css'; // main style file from react-date-range library
    import 'react-date-range/dist/theme/default.css'; // theme css file
    import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'; //Importing icon from heroicons

    import { DateRangePicker } from 'react-date-range';

    function Header() {

    /* State that Handles SearchInput values: */
        const [ searchInput, setSearchInput ] = useState("");
    
    /* State that Handles StartDate & End Datein the Calander: */
        const [ startDate, setStartDate ] = useState( new Date() );
        const [ endDate, setEndDate ] = useState( new Date() );

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


        return (
            <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10"> 
                

                {/* Left-Hand side section: */}
                <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image src='https://links.papareact.com/qd3'
                        layout="fill"
                        objectFit="contain"/* Stops from changing aspect ratio */
                        objectPosition="left"
                    />
                </div>

                {/* Middle Section (Search bar) */}
                <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
                    <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type='text' placeholder="Start your search" value={searchInput} onChange={ (event) => setSearchInput(event.target.value) } />

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
                    <div className="flex flex-col col-span-3 mx-auto">
                        <DateRangePicker 
                            ranges={ [ selectionRange ] }
                            minDate={ new Date() }
                            rangeColors={ ["#FD5B61"] }
                            onChange={ handleSelect }
                        />

                    </div> 
                )}
                

            </header>
        );
    };

    export default Header;