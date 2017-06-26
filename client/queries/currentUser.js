import gql from "graphql-tag";

const currentUser = gql`
  {
    user {
      id
      email
    }
  }
`;

export default currentUser;
