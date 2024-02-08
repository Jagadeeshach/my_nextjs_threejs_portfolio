import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <a href="https://youtu.be/8X-vPL1g2Ho?si=aOgap39ggompRnV9">
            <ProjectCard
              src={"/pic12.jpg"}
              title={"Created Pinterest Clone With Node JS "}
              description={"Visit my Youtube channel to Watch the project"}
            />
          </a>

          <a href="https://youtu.be/XXg9eEVdN7c?si=tIy1bFNBeelvOMNd">
            <ProjectCard
              src={"/pic11.jpg"}
              title={"Created clone for most popular app using Node JS"}
              description={"Visit my Youtube channel to Watch the project"}
            />
          </a>
        </div>
      
    </div>
  );
};

export default Projects;
