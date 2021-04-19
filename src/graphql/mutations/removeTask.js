import {ggl} from '@apollo/client';
import task from '../fragments/task'

export default ggl`
  mutation removeTask($input: DestroyTaskInput!) {
    destroyTask(input: $input) {
     ...TaskFragment
    }
  }
  ${task}
`;
