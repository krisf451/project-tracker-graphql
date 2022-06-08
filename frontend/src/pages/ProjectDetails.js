import React from "react";
import { GET_PROJECT } from "../queries/projectQueries";
import { useQuery } from "@apollo/client";
import { Loader, ClientInfo } from "../components";
import { useParams, Link } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const { errors, loading, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  if (loading) return <Loader />;
  if (errors) return "Something went wrong...";
  return (
    <>
      {!loading && !errors && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>
          <h1>{data?.project?.name}</h1>
          <p>{data?.project?.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data?.project?.status}</p>

          <ClientInfo client={data?.project?.client} />
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
