import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    { name: "Spring Boot", progress: 100, className: "springboot-progress", years: 5 },
    { name: "React", progress: 40, className: "mySQL-progress", years: 2 },
    { name: "JS", progress: 40, className: "js-progress", years: 2 },
    { name: "TS", progress: 40, className: "typescript-progress", years: 2 },
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>{tech.name}: {`${tech.years} years`}</span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
