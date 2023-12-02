import React from 'react'



const projects = [
  {
    name: "Coder Terminal",
    descriptions: ["Coder-terminal is a real-time collaborative code interview tool that empowers both candidates and interviewers to solve coding problems together, with an online code editor and compilers for all languages.", "Coder-terminal is the perfect solution for businesses of all sizes that need to conduct scalable and efficient technical interviews."],
    link: "https://interview.coder-terminal.com",
  },
  {
    name: "Auto Skip Youtube Ads",
    descriptions: ["Auto Skip YouTube Ads is a Chrome extension that automatically skips YouTube ads, including banner ads and pre-roll ads. It has been downloaded by over 7,000 users and has a 4.5-star rating on the Chrome Web Store.", "Auto Skip YouTube Ads works by clicking the skip button as soon as it can, just like a regular user would, but much quicker and effortlessly. This means that you can still support the creators you love, while avoiding the annoyance of ads. The extension is also useful if you're tabbed out or just lazy."],
    link: "https://chrome.google.com/webstore/detail/auto-skip-youtube-ads/fcblefnaalnljhcbldiiaaglfchcmdmb",
  },
  {
    name: "Reliance Automobiles",
    descriptions: ["Reliance Automobiles is one of the largest New & Pre-owned vehicle dealers in Mumbai, with over a decade of experience in buying and selling New/Used cars and more than 5000 satisfied customers across Mumbai.", "The company is looking to build a complete sales platform that can generate dynamic quotations across multiple car brands. The platform should also support multiple roles with their own working models, and users should be able to create tasks for themselves or other team members to complete relevant steps."],
    link: "https://app.relianceautomobiles.in/#/",
  },
]

export default function Project() {


  const FirstTypeSVG = () => <svg className="w-[30rem]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="stroke-1 stroke-white/10" d="M200 0L200 400L400 200L0 200Z" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" /><path className="stroke-1 stroke-white/10" d="M200 100L200 300" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" /><path className="stroke-1 stroke-white/10"
    d="M100 200L300 200" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px" /><circle cx="200" cy="200" r="50" fill="#ffffff" fillOpacity="0.1" /></svg>;


  const SecondTypeSvg = () => <svg className="w-[30rem]" viewBox="0 0 366 366" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="stroke-1 stroke-white/10" clipRule="evenodd" d="M251.589 53.8386C251.589 65.0735 242.923 74.2843 231.91 75.1504L205.326 147.939L248.235 149.93C251.636 142.63 259.039 137.571 267.623 137.571C279.43 137.571 289.001 147.142 289.001 158.949C289.001 170.756 279.43 180.328 267.623 180.328C266.243 180.328 264.894 180.197 263.587 179.947L136.523 305.533C137.203 307.62 137.571 309.848 137.571 312.161C137.571 323.968 127.999 333.54 116.192 333.54C104.385 333.54 94.8139 323.968 94.8139 312.161C94.8139 301.218 103.036 292.195 113.64 290.934L155.272 195.767L114.153 194.755C110.244 199.027 104.624 201.706 98.377 201.706C86.57 201.706 76.9986 192.135 76.9986 180.328C76.9986 168.521 86.57 158.949 98.377 158.949C101.542 158.949 104.546 159.637 107.248 160.871L210.06 60.9954C209.265 58.7578 208.832 56.3487 208.832 53.8386C208.832 42.0316 218.404 32.4601 230.211 32.4601C242.018 32.4601 251.589 42.0316 251.589 53.8386ZM248.139 167.76C248.387 168.308 248.657 168.843 248.949 169.366L138.52 278.512L176.909 190.758C178.098 188.039 177.855 184.907 176.262 182.404C174.668 179.901 171.933 178.356 168.967 178.283L119.508 177.066C119.368 176.148 119.169 175.25 118.916 174.375L208.483 87.3647L184.431 153.219C183.459 155.882 183.812 158.849 185.382 161.209C186.953 163.57 189.554 165.042 192.386 165.173L248.139 167.76Z" pathLength="1" strokeDashoffset="0px" strokeDasharray="1px 1px"></path></svg>

  const RenderProjects = () => projects.map((project: any, key: number) =>
    <div key={key} className='flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset'>
      <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
      {/* <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] bg-gradient-to-c from-highlight to-[10%] to-pink-600 rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-200"></div> */}
      <div className="absolute -bottom-44 -right-48 w-[32rem] h-[32rem] bg-gradient-to-c from-highlight to-[65%] to-transparent rounded-full opacity-10 group-hover:opacity-25 transition duration-300 scale-90 group-hover:scale-110"></div>
      <div className="absolute bottom-55 fade-b -right-20 sm:block">
        {key % 2 == 0 ? <FirstTypeSVG /> : <SecondTypeSvg />}
      </div>

      <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <h3 className="text-4xl font-semibold">{project.name}</h3>
        </div>

        <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">
          {project.descriptions.map((description: any, key: number) => <span key={key}> {description} <br /> <br /></span>)}
        </p>

        <div className="flex justify-normal  mt-auto">
          <a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2" href={project.link} target="_blank">Live
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
          </a>

          {/* <a className="inline-flex mx-2 items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2" href={project.link} target="_blank">Live
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path></svg>
          </a> */}
        </div>

      </div>

    </div>
  )

  return (
    <div className="container mx-auto px-8 2xl:px-32 mt-32" id="projects">

      <h2 className="text-3xl font-semibold tracking-tight mt-32 leading-normal">Personal projects I&lsquo;m the most proud of</h2>

      <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium max-w-2xl">
        I enjoy developing things that address issues. I take pleasure in viewing things through the eyes of the end user and working backward to create interesting experiences.
      </p>

      <div className='grid lg:grid-cols-2 max-w-6xl mx-auto mt-12 gap-8'>
        <RenderProjects />
      </div>
    </div>
  )
}
