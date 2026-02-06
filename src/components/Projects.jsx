const projects = [
  {
    title: "Personal Portfolio",
    points: [
      "Built using React and Vite",
      "Responsive layout with modern UI",
      "Reusable components and clean structure",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Todo App",
    points: [
      "Task management using React state",
      "Add, delete and update todos",
      "Focus on clean logic and UI clarity",
    ],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
