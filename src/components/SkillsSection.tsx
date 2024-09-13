'use client'
import React from 'react'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { WavyBackground } from '@/components/ui/wavy-background';

const skills = [
    {
      id: 1,
      name: 'C++',
      image: '/cpp_logo.png',
    },
    {
      id: 2,
      name: 'Node.js',
      image: '/nodejs-logo.png',
    },
    {
      id: 3,
      name: 'React.js',
      image: '/reactjs-logo.png',
    },
    {
      id: 4,
      name: 'MongoDB',
      image: '/mongodb-logo.png',
    },
];


const SkillsSection = () => {
    return (
        <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">SKILLS</h2>
                <div className='flex flex-row items-center justify-center mb-10 w-full'>
                    <AnimatedTooltip items={skills}/>
                </div>
            </WavyBackground>
        </div>
  )
}

export default SkillsSection
