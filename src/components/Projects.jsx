import React, { useEffect, useState } from 'react';
import '../styles/Projects.scss';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${window.location.origin}/data/projects.json`);
        const data = await response.json();
        setProjects(data.projects);
      } catch (err) {
        setError('Erreur lors du chargement des projets.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <div className="loading">Chargement des projets...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__link">
                  Voir le projet
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 