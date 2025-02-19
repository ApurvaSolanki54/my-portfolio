'use client'
import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";

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
                // [
                    
                //     'Developed a script to read data from XLSX files and generate corresponding SQL queries and JSON data.', 
                //     'Built a logger for the vehicle insurance API, enhancing error tracking and system monitoring', 'Developed middleware to integrate Sentry with an Express server, allowing for detailed logging of errors, as well as tracking of requests and responses.', 
                //     'Hardened the security of API by designing middleware to check the host parameter in incoming requests', 
                //     'Secured claim investigation and settlement process by developing a class for encryption & decryption'
                // ],
                [
                    'Automated manual data insertion by developing an API to store data from XLSX files into the database and saving 2 hours of manual work. ',
                    'Developed a cron job to send daily notifications to active users in batches of  100 users simultaneously.',
                    'Engineered a custom logging system that stores logs in a database, improving troubleshooting efficience.',
                    'Implemented Apple OAuth integration to streamline the client onboarding experience.'
                ],
            
            date: 'June 2024 - Present',
            location: "Mumbai, Maharashtra",
        }
    ];
    
    return (
        <div className='p-12 bg-neutral-900 w-full h-full relative'>
            {/* <BackgroundBeams /> */}
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
