'use client'
import React from 'react'
import { Spotlight } from '@/components/ui/Spotlight'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Link from 'next/link';

function HeroSection() {
    const wordsForTextGenerateEffect="Code infrequently, think constantly: My approch to problem solving."
    const wordsForTypewriter = [
        {
          text: "Hello",
        },
        {
          text: "there!",
        },
        {
          text: "I'm",
        },
        {
          text: "Apurva.",
          className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div>
            <div className='dark:text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className='p-4 relative z-10 w-full text-center'>
                    <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
                        <div className="flex flex-col items-center justify-center">
                            <TypewriterEffectSmooth words={wordsForTypewriter} />
                        </div>
                    </h1>
                    <div className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
                        <TextGenerateEffect words={wordsForTextGenerateEffect} />
                    </div>
                    <div className='mt-4'>
                        <Link href="https://drive.google.com/file/d/1_tuEc06mxGMYGanQS4hOHbZuvINw3M9J/view?usp=sharing" target="_blank">
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Resume
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}   

export default HeroSection
