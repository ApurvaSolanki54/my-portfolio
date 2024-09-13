'use client'
import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from '@/components/ui/background-beams';

const ExperienceSection = () => {
    const experience = [
        {
            title: 'Indian Society for Technical Education (ISTE), TSEC',
            role: 'Technical Executive',
            description:
                ['Designed and developed frontend components for the ISTE-TSEC club’s official website using React.'],
            
            date: 'April 2022 - June 2023',
            location: "Mumbai, Maharashtra",
        },
        {
            title: 'HDFC ERGO',
            role: 'Software Developer Intern',
            description:
                ['Developed a script to read data from XLSX files and generate corresponding SQL queries and JSON data.', 'Built a logger for the vehicle insurance API, enhancing error tracking and system monitoring', 'Developed middleware to integrate Sentry with an Express server, allowing for detailed logging of errors, as well as tracking of requests and responses.', 'Hardened the security of API by designing middleware to check the host parameter in incoming requests', 'Secured claim investigation and settlement process by developing a class for encryption & decryption'],
            
            date: 'June 2024 - Present',
            location: "Mumbai, Maharashtra",
        }
    ];
    
    return (
        <div className='p-12 bg-gray-900 w-full h-full relative'>
            <BackgroundBeams />
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">CO-CURRICULAR ACTIVITY & EXPERIENCE</p>
                </div>
                <div className='mt-10'>
                <HoverEffect items={experience.map(exp=>(
                    {
                        title:exp.title,
                        description:exp.description,
                        role:exp.role,
                        date:exp.date,
                        location:exp.location
                    }
                ))}/>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection
