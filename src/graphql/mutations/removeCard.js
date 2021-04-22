import { gql } from '@apollo/client';
import card from '../fragments/card';

export default gql`
  mutation removeCard($input:  DestroyCardInput!) {
    destroyCard(input: $input) {
       ...CardFragment
    }
  }
  ${card}
`;