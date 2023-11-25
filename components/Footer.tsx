export default function Footer() {
    return (
        <footer className="relative py-9 md:py-7 bg-gray-950/40">
            <div className="absolute inset-0 bg-dots fade-t opacity-60"></div>
            <div className="absolute -top-7 left-0 h-7 w-7 bg-gray-950/40"><div className="absolute inset-0 bg-gray-900 rounded-bl-full"></div></div>
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-between container mx-auto px-8 2xl:px-32 relative text-gray-400 text-sm">
                <div className="tracking-wide flex space-x-1.5">
                    <span>©</span><span>2023&nbsp;&nbsp;–&nbsp;&nbsp;Present</span><span>Anuj Gupta.</span>
                </div>
                <nav className="-order-1 lg:order-1 flex flex-wrap justify-center font-medium">
                    <a className="hover:text-sky-400 hover:underline underline-offset-4 transition px-3.5 py-3" href="#projects">Projects</a>
                    <a className="hover:text-sky-400 hover:underline underline-offset-4 transition px-3.5 py-3" target='_blank' href="https://www.linkedin.com/in/anuj-gupta--/">Contact</a>
                </nav></div>
        </footer>
    )
}
