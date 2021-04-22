import {Link} from 'react-router-dom';
import routes from '../../../config/routes';
import DefaultTemplate from '../../templates/DefaultTemplate';

const Home = () => (
  <DefaultTemplate>
    <p>
      <Link to={routes.CARDS_WITH_GRAPHQL}>See cards with GraphQL!</Link>
    </p>
  </DefaultTemplate>
);

export default Home;
