/* Header functional component: */

    import Image from 'next/image'; //Next.js img tag

    function Header() {
        return (
            <header className="sticky top-0 z-50"> 
                

                {/* Left-Hand side section */}
                <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image src='https://links.papareact.com/qd3'
                        layout="fill"
                        objectFit="contain"/* Stops from changing aspect ratio */
                        objectPosition="left"
                    />
                </div>

                {/* Middle Section */}
                <div>

                </div>

                {/* Right */}
                <div>

                </div>

            </header>
        );
    };

    export default Header;