import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div style={{ padding: '2rem' }}>Project not found.</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} style={{ width: '100%', maxWidth: '600px' }} />
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetail;
