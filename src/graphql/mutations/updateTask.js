import {ggl} from '@apollo/client';
import task from '../fragments/task'

export default ggl`
  mutation updateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
     ...TaskFragment
    }
  }
  ${task}
`;
