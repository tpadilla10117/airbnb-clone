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
                <div>
                    <input type='text' placeholder="Start your search" />
                    <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
                </div>

                {/* Right */}
                <div>

                </div>

            </header>
        );
    };

    export default Header;