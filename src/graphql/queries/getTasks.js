import {gql} from '@apollo/client';
import task from '../fragments/task'

export default gql`
  query getTasks {
    tasks {
     ...TaskFragment
    }
  }
  ${task}
`;
