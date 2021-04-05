import React from 'react';
import { Project } from '../types';

interface ProjectsScreenProps {
  projects: Project[];
}

export const ProjectsScreen = ({ projects }: ProjectsScreenProps) => (
  <div>ProjectsScreen</div>
);
