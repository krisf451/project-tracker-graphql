import React from "react";
import { AddClientModal, Projects, Clients } from "../components";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
