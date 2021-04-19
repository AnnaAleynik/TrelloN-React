import {ggl} from '@apollo/client';
import task from '../fragments/task'

export default ggl`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
     ...TaskFragment
    }
  }
  ${task}
`;
