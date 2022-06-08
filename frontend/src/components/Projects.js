import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import { Loader, ProjectCard } from "../components";

const Projects = () => {
  const { loading, errors, data } = useQuery(GET_PROJECTS);
  if (loading) return <Loader />;
  if (errors) return "Something went wrong...";
  return (
    <>
      {data?.projects?.length > 0 ? (
        <div className="row mt-4">
          {data?.projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
