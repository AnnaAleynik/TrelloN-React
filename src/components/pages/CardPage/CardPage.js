import { useParams } from 'react-router-dom';
import todos from '../../../data/todos';
import Card from '../../molecules/Card';
import DefaultTemplate from '../../templates/DefaultTemplate';

const CardPage = () => {
  const { id: queryId } = useParams();

  const todo = todos.find(({ id }) => id === +queryId);

  return (
    <DefaultTemplate>
      <Card todo={todo} />
    </DefaultTemplate>
  );
};

export default CardPage;
