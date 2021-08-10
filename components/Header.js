/* Header functional component: */

    import Image from 'next/image'; //Next.js img tag
    import { SearchIcon } from '@heroicons/react/solid'; //Importing icon from heroicons

    function Header() {
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
                    <input className="flex-grow pl-5 bg-transparent outline-none" type='text' placeholder="Start your search" />

                    <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
                </div>

                {/* Right */}
                <div>

                </div>

            </header>
        );
    };

    export default Header;