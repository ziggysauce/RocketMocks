import React from 'react';

const Project = ({ project }) => (
  <div>
    <span><i className="fas fa-cog"></i></span>
    <h4>{project.title}</h4>
  </div>
);

export default Project;