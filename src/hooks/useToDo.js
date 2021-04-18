import { useState } from 'react';
import todos from '../data/todos';

const useToDo = () => {
  const [list, setList] = useState(todos);

  return { list, updateList: setList };
};

export default useToDo;