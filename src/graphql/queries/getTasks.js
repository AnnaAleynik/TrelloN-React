import {ggl} from '@apollo/client';
import task from '../fragments/task'

export default ggl`
  query getTasks {
    tasks {
     ...TaskFragment
    }
  }
  ${task}
`;
