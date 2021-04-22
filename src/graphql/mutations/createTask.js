import { gql } from '@apollo/client';
import task from '../fragments/task'

export default gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
     ...TaskFragment
    }
  }
  ${task}
`;
