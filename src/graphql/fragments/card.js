import {gql} from '@apollo/client';

export default gql`
  fragment CardFragment on Card {
    id
    title
  }
`