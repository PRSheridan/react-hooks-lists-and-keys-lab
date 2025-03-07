import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techElement = technologies.map((technology) => {
    return (
      <span key={technologies.indexOf(technology)}>{technology}</span>
    )
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techElement}
      </div>
    </div>
  );
}

export default ProjectItem;
