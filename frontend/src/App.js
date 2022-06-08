import React from "react";
import { Header, Clients, AddClientModal } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <div className="container">
        <AddClientModal />
        <Clients />
      </div>
    </>
  );
};

export default App;
