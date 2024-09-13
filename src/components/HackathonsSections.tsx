'use client'
import React from 'react'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const hackathons = [
    {
        description:
            'Selected as one of the top 10 finalists in the TSEC Hacks Hackathon.',
        name: 'TSEC Hacks Hackathon',
      
    },
    {
        description:
            "Qualified for Code for Good (2022) Hackathon conducted by JPMorgan Chase",
        name: 'JPMorgan Chase',
      
    },
    {
        description:
            "Participated and qualified for the final in multitech Hackathon.",
        name: 'Shri Bhagubhai Mafatlal Polytechnic',
    },
];

const HackathonsSections = () => {

    return (
        <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
            <h2 className='dark:text-white text-3xl font-bold text-center mb-8 z-10'>HACKATHONS</h2>
            <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-6xl'>
                    <InfiniteMovingCards
                        items={hackathons}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default HackathonsSections
