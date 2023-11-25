export default function GetInTouch() {
    return (
        <section className="container mx-auto px-8 2xl:px-32 py-32">
            <div className='bg-gray-800/40 ring-1 ring-inset ring-gray-700/30 px-8 lg:px-16 py-16 md:py-24 rounded-2xl relative overflow-hidden'>
                <div className='absolute inset-0 bg-dots fade-y opacity-70' ></div>
                <div className='relative flex flex-col gap-10 md:flex-row items-center justify-between'>
                    <div className="flex flex-col">
                        <h2 className="font-semibold tracking-tight text-gray-100 text-4xl leading-tight">
                            Let’s get <span className="highlight bg-clip-text ">in touch</span></h2>
                        <p className="mt-7 md:text-lg leading-relaxed font-medium text-gray-400 max-w-xl">
                            I’m open to hearing about new opportunities. Feel free to reach out to me if you have a question, or just want to say hi!
                        </p>
                    </div>
                    <div className="md:mt-0 w-full md:w-auto flex-shrink-0">
                        <a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-base font-medium px-5 py-2.5 w-full md:w-auto justify-center" target="_blank" href="https://wa.me/919022171228">
                            Start a conversation<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover/button:translate-x-0.5 transition-transform"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
