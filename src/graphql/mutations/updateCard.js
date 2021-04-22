import { gql } from '@apollo/client';
import card from '../fragments/card';

export default gql`
  mutation updateCard($input:  UpdateCardInput!) {
    updateCard(input: $input) {
       ...cardFragment
    }
  }
  ${card}
`;