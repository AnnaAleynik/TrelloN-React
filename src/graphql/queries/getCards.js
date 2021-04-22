import {gql} from '@apollo/client';
// import card from '../fragments/card';

export default gql`
  query getCards {
    cards {
     id
     title
    }
  }
`;
