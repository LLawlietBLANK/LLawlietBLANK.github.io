import React from 'react';
import type { Experience } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const educationData: Experience[] = [
    { year: '2022 - 2026', role: 'B.Tech. in Computer Science', company: 'RajKumar Goel Institute of Technology', description: 'CGPA: 8.1. Focused on Data Structures, Algorithms, and Web Technologies.' },
    { year: '2022', role: 'Higher Secondary', company: 'Dr. K.N. Modi Global School', description: 'Score: 85%. Science stream with Computer Science.' },
    { year: '2020', role: 'Secondary School', company: 'Dr. K.N. Modi Global School', description: 'Score: 89.6%.' }
];

// const TimelineItem: React.FC<{ item: Experience, isLeft: boolean }> = ({ item, isLeft }) => {
//     const itemRef = useScrollAnimation<HTMLDivElement>({
//         translateX: isLeft ? [-100, 0] : [100, 0],
//         opacity: [0, 1],
//         duration: 800,
//         easing: 'easeOutExpo',
//     });

//     return (
//         <div ref={itemRef} className="mb-8 flex justify-between items-center w-full">
//             {isLeft && <div className="order-1 w-5/12"></div>}
//             <div className="z-20 flex items-center order-1 bg-light-accent dark:bg-dark-accent shadow-xl w-8 h-8 rounded-full">
//                 <h1 className="mx-auto font-semibold text-lg text-white"></h1>
//             </div>
//             <div className={`order - 1 bg - light - surface dark: bg - dark - surface rounded - lg shadow - xl w - 5 / 12 px - 6 py - 4 ${ isLeft ? 'text-right' : '' } `}>
//                 <p className="text-sm text-light-accent dark:text-dark-accent">{item.year}</p>
//                 <h3 className="mb-3 font-bold text-light-text dark:text-white text-xl">{item.role}</h3>
//                 <h4 className="mb-3 font-semibold text-md text-gray-500 dark:text-gray-400">{item.company}</h4>
//                 <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-dark-text">
//                     {item.description}
//                 </p>
//             </div>
//         </div>
//     );
// }

// const Timeline: React.FC = () => {
//     return (
//         <div className="relative wrap overflow-hidden p-10 h-full">
//             <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border" style={{left: '50%'}}></div>
//             {experienceData.map((item, index) => (
//                 <TimelineItem key={index} item={item} isLeft={index % 2 === 0} />
//             ))}
//         </div>
//     );
// };



const TimelineItem: React.FC<{ item: Experience, isLeft: boolean }> = ({ item, isLeft }) => {
    const itemRef = useScrollAnimation<HTMLDivElement>({
        translateX: isLeft ? [-50, 0] : [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
    });

    return (
        <div ref={itemRef} className="mb-16 flex w-full items-center justify-between group relative">
            {/* Left side content */}
            <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'pl-8 order-last'}`}>
                {isLeft && (
                    <div className="relative">
                        <div className="absolute top-6 -right-10 w-10 h-0.5 bg-light-accent dark:bg-dark-accent opacity-50"></div>
                        <div className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/20 dark:hover:bg-black/50 group-hover:border-light-accent/50 dark:group-hover:border-dark-accent/50">
                            <div className="flex flex-col items-end">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white bg-light-accent dark:bg-dark-accent rounded-full shadow-lg">
                                    {item.year}
                                </span>
                                <h3 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">{item.role}</h3>
                                <h4 className="mb-3 text-sm font-semibold text-light-accent dark:text-dark-accent uppercase tracking-wide">{item.company}</h4>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Center dot with Icon */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 bg-light-surface dark:bg-dark-surface border-4 border-light-accent dark:border-dark-accent rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:shadow-[0_0_20px_rgba(99,230,190,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-light-accent dark:text-dark-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            </div>

            {/* Right side content */}
            <div className={`w-5/12 ${!isLeft ? 'text-left pl-8' : 'pr-8 order-first'}`}>
                {!isLeft && (
                    <div className="relative">
                        <div className="absolute top-6 -left-10 w-10 h-0.5 bg-light-accent dark:bg-dark-accent opacity-50"></div>
                        <div className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/20 dark:hover:bg-black/50 group-hover:border-light-accent/50 dark:group-hover:border-dark-accent/50">
                            <div className="flex flex-col items-start">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-white bg-light-accent dark:bg-dark-accent rounded-full shadow-lg">
                                    {item.year}
                                </span>
                                <h3 className="mb-1 text-xl font-bold text-gray-800 dark:text-white">{item.role}</h3>
                                <h4 className="mb-3 text-sm font-semibold text-light-accent dark:text-dark-accent uppercase tracking-wide">{item.company}</h4>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


const Timeline: React.FC = () => {
    return (
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
            <div className="absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border-l-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-400 to-transparent dark:via-gray-600"></div>
            {educationData.map((item, index) => (
                <TimelineItem key={index} item={item} isLeft={index % 2 === 0} />
            ))}
        </div>
    );
};
export default Timeline;
