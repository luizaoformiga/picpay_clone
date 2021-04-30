import { gql } from "@apollo/client";

const GET_CONTACTS = gql`
  query {
    loading {}
  }
`;

export default GET_CONTACTS;