import SocialMediaBar from "./SocialMediaBar";

export default function Header() {
    return (
        <div className="relative" >
            <div className="absolute h-48 inset-x-0 top-0 bg-dots fade-b"></div>
            <div className="fixed inset-0 z-40 transition-colors duration-300 pointer-events-none" >
                <header className="absolute top-8 inset-x-0">
                    <div className="relative container px-8 2xl:px-32 mx-auto flex items-center justify-center">
                        <div className="flex-shrink-pointer-events-auto"></div>

                        {/* <div className="md:hidden ml-auto pointer-events-auto">
                        <button className="pointer-events-auto inline-flex gap-2 h-10 px-4 font-medium text-sm justify-center items-center rounded-full text-gray-300 bg-gray-800/90 shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 hover:bg-gray-700/70 backdrop-blur transition" aria-label="Open Menu">
                                <span style="{opacity: 1; transform: none;">Menu</span>
                                <div style="transform: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M6 9l6 6l6 -6"></path></svg></div></button></div> */}


                        {/* FirstNavBar */}
                        <nav className="pointer-events-auto inline-flex ml-auto bg-gray-800/80 px-3.5 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md">
                            <a className="px-6 lg:px-3.5 py-2 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset" href="#projects">Projects</a>
                            {/* <a className="px-6 lg:px-3.5 py-2 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined" href="/projects/">Contact</a> */}
                        </nav>
                        {/* End of FirstNavBar */}

                        <SocialMediaBar />
                    </div>
                </header>
            </div>
        </div>
    )
}
