export default function ProjectCard({ project, setShowModal, setCurrentProject }) {
  const { title, description, src, languages } = project;

  const handleProjectCard = () => {
    setShowModal((prev) => !prev);
    setCurrentProject(project);
  };

  return (
    <>
      <div className="projects-card" onClick={handleProjectCard}>
        <div className="projects-card--image">
          <img src={src} alt={title} />
        </div>
        <div className="projects-card--technologies">
          {languages.map((language) => (
            <span key={`${title}-${language}`}>{language}</span>
          ))}
        </div>
        <div className="projects-card--body">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
