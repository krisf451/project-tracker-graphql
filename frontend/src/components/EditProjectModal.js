import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Loader } from "../components";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECT } from "../queries/projectQueries";
import toast from "react-hot-toast";

const EditProjectModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { errors, loading, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  const [name, setName] = useState(data?.project?.name);
  const [description, setDescription] = useState(data?.project?.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: data?.project?.id, name, status, description },
    refetchQueries: [
      { query: GET_PROJECT, variables: { id: data?.project?.id } },
    ],
  });

  if (loading) return <Loader />;
  if (errors) return "Something went wrong...";

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "") {
      return toast.error("Please fill in all fields");
    }

    updateProject(name, description, status);
    toast.success("Succesfully updated project!!");
    navigate("/");
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>Edit Project</div>
        </div>
      </button>
      <div
        className="modal fade"
        id="addProjectModal"
        aria-labelledby="addProjectModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addProjectModal">
                New Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">Not Started</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="mb-3"></div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProjectModal;
