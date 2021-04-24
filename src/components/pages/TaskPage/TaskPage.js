import { useParams } from 'react-router-dom';
import { useHistory, Link } from 'react-router-dom';
import todos from '../../../data/todos';
import Task from '../../molecules/Task';
import DefaultTemplate from '../../templates/DefaultTemplate';

const TaskPage = () => {
  const { id: queryId } = useParams();
  const {c_id} = useParams();

  const todo = todos.find(({ id }) =>  id === +queryId);
  console.log(queryId);

  let history = useHistory;

  return (
    <DefaultTemplate>
      <Task todo={todo} />
      <Link to={`/cards/${c_id}`}>
        Back to card
      </Link>
      <button onClick={history.goBack}>Back</button>
    </DefaultTemplate>
  );
};

export default TaskPage;
