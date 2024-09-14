'use client'
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'

const educations = [
    {
        "id":1,
        "name": "Thadomal Shahani Engineering College",
        "course": "Bachelor of Engineering in Electronics and Telecommunication Engineering",
        "gpa": "8.80",
        "location":"Mumbai, Maharashtra",
        "date":"Dec 2021 - June 2024"
    },
    {
        "id":2,
        "name":"Shri Bhagubhai Mafatlal Polytechnic",
        "course":"Diploma in Computer Engineering ",
        "gpa":"92.20",
        "location":"Mumbai, Maharashtra",
        "date":"Aug 2018 - Aug 2021"
    }
]

interface Education{
    id:number,
    name: string,
    course: string,
    gpa: string,
    location: string,
    date: string,
}
const EducationsSection = () => {
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>EDUCATIONS</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 justify-center'>
                    {educations.map((education:Education)=>(
                        <div key={education.id} className='flex justify-center'>
                            <BackgroundGradient
                            className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'
                            >
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {education.name}
                                    </p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                                        {education.course}
                                    </p>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                                            {`${education.gpa==="92.20" ? `Percentage: ${education.gpa}`: `GPA: ${education.gpa}`}`}
                                        </p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                                            {education.location}
                                        </p>
                                    </div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {education.date}
                                    </p>
                                </div>
                                
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EducationsSection
