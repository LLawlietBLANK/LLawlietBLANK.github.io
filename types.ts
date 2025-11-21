import React from 'react';
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // Percentage 0-100
  icon: React.ReactNode;
}
