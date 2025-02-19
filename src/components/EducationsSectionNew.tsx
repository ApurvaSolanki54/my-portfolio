"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function EducationsSectionNew() {
    return (<>
        <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
            <div className='mt-8 text-center'>
                <p className='text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl pt-10'>EDUCATIONS</p>
            </div>
            {/* Radial gradient for the container to give a faded look */}
            <div className="mt-8 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 ">
                <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 ">

                    <GridItem
                        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/4/2/10]"
                        name="Thadomal Shahani Engineering College"
                        course="Bachelor of Engineering in Electronics and Telecommunication Engineering"
                        gpa="8.80"
                        location="Mumbai, Maharashtra"
                        date="Dec 2021 - June 2024"
                        />

                    <GridItem
                        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/4/3/10]"
                        name="Shri Bhagubhai Mafatlal Polytechnic"
                        course="Diploma in Computer Engineering "
                        gpa="92.20"
                        location="Mumbai, Maharashtra"
                        date="Aug 2018 - Aug 2021"
                    />
                </ul>
            </div>
        </div>
</>
    );
}

interface GridItemProps {
    area: string;
    // icon: React.ReactNode;
    name: string;
    course: React.ReactNode;
    gpa: string,
    location: string,
    date: string,
}

const GridItem = ({ area, name, course, gpa, location, date }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                                {name}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                            >
                                {course}
                            </h2>
                            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400">
                                GPA: {gpa}
                            </h2>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                            >
                                {location}
                            </h2>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                            >
                                {date}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
