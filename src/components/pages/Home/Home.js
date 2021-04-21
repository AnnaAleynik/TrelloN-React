import {Link} from 'react-router-dom';
import routes from '../../../config/routes';
import DefaultTemplate from '../../templates/DefaultTemplate';

const Home = () => (
  <DefaultTemplate>
    <Link to={routes.CARDS}>See cards!</Link>
  </DefaultTemplate>
);

export default Home;
