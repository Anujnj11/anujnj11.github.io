import React from 'react'
import Image from 'next/image'

const allCompany = [
    {
        name: "Heady",
        role: "Staff Engineer",
        from: "Jan 2021",
        to: "Present",
        logo: "/heady.webp",
        link: "https://www.heady.io/"
    },
    {
        name: "Heady",
        role: "Software Developer",
        from: "Apr 2021",
        to: "Dec 2022",
        logo: "/heady.webp",
        link: "https://www.heady.io/"
    },
    {
        name: "Tavaga",
        role: "Sr. Software Developer",
        from: "Oct 2018",
        to: "Mar 2021",
        logo: "/tavaga.webp",
        link: "https://www.tavaga.com/"
    },
    {
        name: "5Paisa",
        role: "Software Developer",
        from: "Oct 2016",
        to: "Mar 2018",
        logo: "/5paisa.png",
        link: "https://www.5paisa.com/"
    }
]


const skills = ["Node JS", "Rest API Development", "Nest JS", "MicroServices", "MongoDB", "MySQL", "Docker", "TDD", "BDD", "K8", "AWS", "Angular 10+", "Next", "Chrome Extension", "Cucumber JS", "Jest"];

export default function AboutMe() {

    const Companies = () => allCompany.map((company: any, key: number) =>
        <li key={key} className="flex items-center">
            <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-2 ring-white-500 flex-shrink-0 flex items-center justify-center">
                <Image src={company.logo} alt="me" loading="lazy" className="" width="100" height="100" />
            </div>
            <div className="relative w-full">
                <div className="ml-5">
                    <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
                        <a className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors" href={company.link} target="_blank" rel="noopener noreferrer">{company.name}
                        </a>
                        <div className="text-xs text-gray-400">
                            <time>{company.from}</time>&nbsp;&nbsp;–&nbsp;&nbsp;<span>{company.to} </span>
                        </div>
                    </div>
                    <div className="font-medium text-xs mt-0.5 text-gray-400">{company.role}</div>
                </div>
            </div>
        </li>
    );


    const Skills = () => skills.map((skill: any, key: number) =>
        <li key={key} className="flex items-center gap-3 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
            {skill}
        </li>
    )

    return (
        <section className='container flex flex-col gap-8 mx-auto px-8 2xl:px-32 mt-28'>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='bg-gray-800/40 flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative'>
                    <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
                    <div className="relative">
                        <h2 className="text-2xl font-semibold tracking-tight">About me</h2>
                        <div className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium">
                            <p>Hey! I&lsquo;m Anuj Gupta, a 27-year-old creative who enjoys making products using coding.</p>

                            <p>Since I was a youngster, I&lsquo;ve been fascinated by how things function. This sparked my interest in programming and computer science. I tried building a script to automate a repetitious activity when I was 13, and it made me feel like a superhero 🦸‍♂️!</p>

                            <p>I received my bachelor&lsquo;s degree in computer science and engineering from Mumbai University. Even now, much of what I build or learn is motivated by curiosity.</p>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-800/40 xl:w-4/12 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative'>
                    <div className='absolute inset-0 bg-dots fade-y opacity-70'></div>
                    <div className="relative">
                        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

                        <div className='mt-7'>
                            <ol className='space-y-7'>
                                <Companies />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800/40 flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative">

                <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>

                <div className="relative flex flex-col items-start h-full">
                    <h2 className="text-2xl font-semibold tracking-tight">My skills</h2>
                    <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium">
                        I am continuously learning new and intriguing concepts. I try to apply these concepts to real-world challenges. I enjoy working with the following technologies:
                    </p>
                    <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 font-medium">
                        <Skills />
                    </ul>
                </div>
            </div>
        </section>
    )
}
