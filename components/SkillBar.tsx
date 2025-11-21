import React from 'react';
import type { Skill } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const barRef = useScrollAnimation<HTMLDivElement>({
    width: ['0%', `${skill.level}%`],
    easing: 'easeInOutQuad',
    duration: 1500,
  });

  const textRef = useScrollAnimation<HTMLDivElement>({
    opacity: [0, 1],
    translateY: [10, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: 200,
  });

  return (
    <div ref={textRef} className="w-full">
      <div className="flex items-center justify-between mb-1 text-light-text dark:text-dark-text">
        <div className="flex items-center gap-2">
            <span className="text-light-accent-2 dark:text-dark-accent-2">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          ref={barRef}
          className="bg-gradient-to-r from-dark-accent to-dark-accent-2 h-2.5 rounded-full"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
