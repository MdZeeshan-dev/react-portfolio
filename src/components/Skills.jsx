const skills = [
  { name: "HTML", icon: "/Skills/html-1.svg" },
  { name: "CSS", icon: "/Skills/css-3.svg" },
  { name: "JavaScript", icon: "/Skills/javascript-1.svg" },
  { name: "React", icon: "/Skills/React.svg" },

  { name: "Java", icon: "/Skills/java-4.svg" },
  { name: "Node.js", icon: "/Skills/nodejs-1.svg" },
  { name: "Express.js", icon: "/Skills/expressjs-icon.svg" },
  { name: "MongoDB", icon: "/Skills/MongoDB.svg" },

  { name: "Git", icon: "/Skills/git-icon-logo-svgrepo-com.svg" },
  { name: "GitHub", icon: "/Skills/github-svgrepo-com.svg" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-circle">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
