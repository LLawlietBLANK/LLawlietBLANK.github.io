
import React from 'react';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projectsData: Project[] = [
  {
    title: 'Movie Recommender System',
    description: 'A content-based movie recommendation system suggesting similar movies using plot descriptions, genres, and cast information. Built with Pandas, NumPy, and Scikit-learn.',
    imageUrl: 'https://picsum.photos/seed/movie/600/400',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    link: 'https://github.com/LLawlietBLANK/Movie-Recommender-System-v1',
  },
  {
    title: 'Smart Research Assistant',
    description: 'An NLP application to automate document summarization and context-aware question answering. Features long-document summarization and deep QA with textual reference extraction.',
    imageUrl: 'https://picsum.photos/seed/research/600/400',
    tags: ['NLP', 'FastAPI', 'Streamlit', 'FAISS', 'Transformers'],
    link: 'https://github.com/LLawlietBLANK/Research-Summarizer',
  },
];

const Projects: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
  });

  return (
    <section id="projects" className="py-24 bg-light-bg dark:bg-dark-bg">
      <div ref={sectionRef} className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 font-jp">My Work</h2>
        <div className="w-24 h-1 mx-auto bg-light-accent dark:bg-dark-accent rounded-full mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
