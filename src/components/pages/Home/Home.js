import {Link} from 'react-router-dom';
import routes from '../../../config/routes';
import DefaultTemplate from '../../templates/DefaultTemplate';

const Home = () => (
  <DefaultTemplate>
    <p>
      <Link to={routes.TASKS}>See cards!</Link>
    </p>
    <p>
      <Link to={routes.TASKS_WITH_GRAPHQL}>See tasks with GraphQL</Link>
    </p>
  </DefaultTemplate>
);

export default Home;
