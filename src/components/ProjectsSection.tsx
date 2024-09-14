"use client";
import Image from "next/image";
import StickyScrollReveal from '@/components/ui/sticky-scroll-reveal';

const ProjectsSection = () => {

    const projects = [
        {
            title: 'Lightron: Web Server',
            description:
                ['Built a web server that is optimized for hosting static websites.', 'This server has a user-friendly interface that allows for easy configuration, and includes support for HTTPS and virtual hosting.', 'It is capable of handling over 26,000 requests per second and It has been tested and proven to work well on both Windows and Linux operating systems (across three different distributions).'],
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/Lightron_4.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: 'Code Kitchen',
            description:
                ['Code Kitchen is the platform that allows users to solve algorithmic questions.', 'Supports 35+ programming languages.', 'Showcases a user-friendly environment for coding practice and instant feedback on solution correctness.'],
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/file.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: 'Find-Mate',
            description:
                ['Find-Mate helps people find localities and match with roommates by interests and budget.', 'Created a platform to help flat owners manage their rental properties by allowing them to easily change the description of their existing properties or add new ones.', 'Built a filter that gives customers, The finest selection of available roommates and rental flats.'],
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/find-mate-logo.jpg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: 'Taru Foundation',
            description:
                ['Developed an E-commerce website for a nonprofit organization called Taru Foundation, as part of the Code for Good Hackathon hosted by JPMorgan Chase in 2022.', 'Built an e-commerece platform to connect buyers and rural Self-help group sellers for their products in the open market.', 'The website that comprises of an interactive GUI, database of all buyers and sellers, functions for uploading the product catalog, a delivery mechanism, invoicing.'],
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/taru-foundation.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
    ];
  return (
    <div>
      <div className='text-center bg-gray-900'>
        <p className='py-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>PROJECTS</p>
      </div>
      <StickyScrollReveal content={projects}/>
    </div>
  )
}

export default ProjectsSection
