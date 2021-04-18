import { useParams } from 'react-router-dom';
import todos from '../../../data/todos';
import Task from '../../molecules/Task';
import DefaultTemplate from '../../templates/DefaultTemplate';

const TaskPage = () => {
  const { id: queryId } = useParams();

  const todo = todos.find(({ id }) => id === +queryId);

  return (
    <DefaultTemplate>
      <Task todo={todo} />
    </DefaultTemplate>
  );
};

export default TaskPage;
