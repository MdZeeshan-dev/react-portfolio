const projects = [
  {
    title: "HireLog",
    points: [
      "Track and manage job applications in one place",
      "Add, edit and delete applications",
      "Filter jobs by status and priority",
      "Built with React and Tailwind CSS",
    ],
    live: "https://hirelog-lemon.vercel.app/",
    github: "https://github.com/MdZeeshan-dev/hirelog",
  },
  {
    title: "FlowCX",
    points: [
      "Visual workflow builder with drag-and-drop automation",
      "Trigger, Message and Condition nodes",
      "Support ticket management dashboard",
      "Virtualized ticket table for large datasets",
    ],
    live: "https://flow-cx.vercel.app/",
    github: "https://github.com/MdZeeshan-dev/FlowCX",
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