import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Git", progress: 100, className: "github-progress", years: 3 },
    { name: "Postman", progress: 100, className: "postman-progress", years: 3 },
    { name: "Amazon Web Services (AWS)", progress: 100, className: "aws-progress", years: 3 },
    { name: "Docker", progress: 66.6, className: "docker-progress", years: 2 },
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} years`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
