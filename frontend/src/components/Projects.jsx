import React from "react";
import "./projects.css";

export default function Projects() {
  const sampleProjects = [
    {
      id: 1,
      title: "Modern Villa",
      subtitle: "Luxury Home Design",
      image: "https://picsum.photos/500/350?random=1",
    },
    {
      id: 2,
      title: "Corporate Office",
      subtitle: "Downtown Workspace",
      image: "https://picsum.photos/500/350?random=2",
    },
    {
      id: 3,
      title: "Resort Project",
      subtitle: "Beach Side Architecture",
      image: "https://picsum.photos/500/350?random=3",
    },
  ];

  return (
    <section className="projects-section">

      <div className="projects-grid">
        {sampleProjects.map((p) => (
          <div className="project-card" key={p.id}>
            <img className="project-img" src={p.image} alt={p.title} />

            <h3 className="project-title">{p.title}</h3>

            <p className="project-subtitle">{p.subtitle}</p>

            <button className="read-more-btn">READ MORE</button>
          </div>
        ))}
      </div>
    </section>
  );
}

