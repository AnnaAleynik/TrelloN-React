import {ggl} from '@apollo/client';

export default ggl`
  query getTasks {
    tasks {
      id
      title
    }
  }
`;
