const LINKS = {
    RESUME: "https://anuj-resume.s3.ap-south-1.amazonaws.com/Anuj_Gupta.pdf",
    GITHUB: "https://github.com/Anujnj11",
    LINKEDIN: "https://www.linkedin.com/in/anuj-gupta--/"
}

export default function SocialMediaBar() {
    return (
        <nav className="pointer-events-auto inline-flex ml-4 bg-gray-800/80 items-center px-3 h-10 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md">
            <a href={LINKS.GITHUB} className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
            </a>

            <a href={LINKS.LINKEDIN} className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
            </a>


            <a href={LINKS.RESUME} className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
            </a>
        </nav>
    )
}
