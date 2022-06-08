import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation addProject(
    $clientId: ID!
    $name: String!
    $status: ProjectStatus!
    $description: String!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      status
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

// export const DELETE_PROJECT = gql`
//   mutation deleteProject($id: ID!) {
//     deleteClient(id: $id) {
//       id
//       name
//       email
//       phone
//     }
//   }
// `;

// export const EDIT_PROJECT = gql`
//   mutation updateProject($name: String!, $email: String!, $phone: String!) {
//     addClient(name: $name, email: $email, phone: $phone) {
//       id
//       name
//       email
//       phone
//     }
//   }
// `;
