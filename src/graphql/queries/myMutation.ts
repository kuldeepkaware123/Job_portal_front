// src/graphql/queries/myMutation.ts
import { gql } from '@apollo/client';

export const CANDIDATE_RAGISTRATION_MUTATION = gql`
  mutation CreateCandidate($candidateInput: candidateInput) {
  createCandidate(CandidateInput: $candidateInput) {
    id
    fName
    lName
    contact
    email
    username
    password
    createDateTime
    status
  }
}
`