import React from 'react'
import Image from 'next/image'

export default function Intro() {
    return (
        <section className='relative min-h-[140vh] flex flex-col lg:flex-row items-start lg:items-center lg:justify-between pt-10 container mx-auto px-8 xl:px-32 overflow-x-hidden'>
            <div className='max-w-2xl'>
                <h1 className="mt-2 font-bold tracking-tight text-gray-100 text-4xl md:text-5xl leading-tight md:leading-tight">
                    Hey there, I’m <br />
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-amber-200 to-yellow-400 bg-gradient-to-r bg-clip-text text-transparent">Anuj Gupta.</span>
                </h1>

                <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-xl">

                    Software developer with 7 years of experience as a back-end developer, passionate about programming and eager to tackle any workplace challenge 👨🏽‍💻🇮🇳! Highly qualified, dedicated, and versatile professional with expertise in all aspects of programming and development. Excellent analytical, organizational, and technical skills, as well as strong communication and interpersonal abilities.
                </p>

                <div className="flex flex-col sm:flex-row mt-10 gap-4">

                    <a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800/90 shadow-xl shadow-black/20 ring-1 [&amp;:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center" target='_blank' href="https://www.linkedin.com/in/anuj-gupta--/">Let’s connect</a>
                </div>

            </div>

            <div className="p-10 lg:p-10 flex-shrink-0 -ml-8 lg:ml-0 lg:-mr-20 relative -order-1 lg:order-1">
                <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(black_55%,transparent_25%)] rounded-full"></div>
                <div className="absolute inset-0 [mask-image:radial-gradient(black_42%,transparent_57%)] rounded-full">
                    <div className="absolute inset-6 lg:inset-12 mask-dots rounded-full"></div>
                </div>
                <div data-gatsby-image-wrapper=""
                    className="gatsby-image-wrapper gatsby-image-wrapper-constrained relative w-30 h-30 lg:w-[18.75rem] lg:h-[18.75rem] rounded-full">
                    <div style={{ ['max-width' as any]: "300px" }} ></div>
                    <Image aria-hidden="true" src="/anuj_gupta.png" alt="me" width="400" height="200" />
                </div>
            </div>

        </section>
    )
}
