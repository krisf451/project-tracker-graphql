import React from "react";
import { useQuery } from "@apollo/client";
import { ClientRow, Loader } from "../components";
import { GET_CLIENTS } from "../queries/clientQueries";

const Clients = () => {
  const { loading, errors, data } = useQuery(GET_CLIENTS);
  console.log(data);
  if (loading) return <Loader />;
  if (errors) return "Something went wrong...";
  return (
    <div>
      {!loading && !errors && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clients;
