import {gql} from '@apollo/client';
import task from '../fragments/task'

export default gql`
  mutation updateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
     ...TaskFragment
    }
  }
  ${task}
`;
