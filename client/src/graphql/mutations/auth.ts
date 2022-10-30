import { gql } from "@apollo/client";

// Define mutation
export const LOGIN = gql`
  mutation Login($input: InputLoginDto!) {
    login(input: $input) {
      user {
        _id
        email
        lastName
        firstName
        avatar
        backgroundImage
      }
      accessToken
      tokenType
    }
  }
`;

// Define mutation
export const REGISTER = gql`
  mutation Mutation($inputCreate: InputCreateUserDto!) {
    createUser(inputCreate: $inputCreate) {
      status
      message
    }
  }
`;
