import {gql} from '@apollo/client';
import task from '../fragments/task'

export default gql`
  mutation removeTask($input: DestroyTaskInput!) {
    destroyTask(input: $input) {
     ...TaskFragment
    }
  }
  ${task}
`;
