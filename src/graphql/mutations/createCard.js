import {  gql} from '@apollo/client';
import card from '../fragments/card'

export default gql`
  mutation createTask($input: CreateCardInput!) {
    createCard(input: $input) {
     ...CardFragment
    }
  }
  ${card}
`;
