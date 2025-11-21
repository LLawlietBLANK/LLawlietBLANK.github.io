
import React from 'react';
import type { Skill } from '../types';
import SkillBar from './SkillBar';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CodeIcon, BrushIcon, ServerIcon } from './icons/Icons';

const skillsData: Skill[] = [
  { name: 'Python (ML/AI)', level: 95, icon: <CodeIcon /> },
  { name: 'NLP & Transformers', level: 90, icon: <CodeIcon /> },
  { name: 'React & Web Dev', level: 85, icon: <BrushIcon /> },
  { name: 'SQL & Databases', level: 80, icon: <ServerIcon /> },
  { name: 'TensorFlow', level: 85, icon: <CodeIcon /> },
  { name: 'FastAPI & REST APIs', level: 90, icon: <ServerIcon /> },
  { name: 'Data Pipelines', level: 85, icon: <ServerIcon /> },
  { name: 'Recommender Systems', level: 88, icon: <CodeIcon /> },
];

const Skills: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
  });

  return (
    <section id="skills" className="py-24 bg-light-surface dark:bg-dark-surface">
      <div ref={sectionRef} className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 font-jp">My Skills</h2>
        <div className="w-24 h-1 mx-auto bg-light-accent dark:bg-dark-accent rounded-full mb-12"></div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skillsData.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
