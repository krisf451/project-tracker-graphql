import React from "react";
import { GET_PROJECT, GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { useQuery, useMutation } from "@apollo/client";
import {
  Loader,
  ClientInfo,
  EditProjectForm,
  EditProjectModal,
} from "../components";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { errors, loading, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: data?.project?.id },
    onCompleted: () => {
      navigate("/");
      toast.success("successfully deleted project");
    },
    refetchQueries: [{ query: GET_PROJECTS }],
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
          <EditProjectModal />
          <h1>{data?.project?.name}</h1>
          <p>{data?.project?.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data?.project?.status}</p>
          <ClientInfo client={data?.project?.client} />
          <EditProjectForm project={data?.project} />
          <div className="d-flex mt-5 ms-auto">
            <button className="btn btn-danger btn-sm" onClick={deleteProject}>
              Delete <FaTrash />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
