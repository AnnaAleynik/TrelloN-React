import { useState } from 'react';
// import todos from '../data/todos';

const useToDo = (todos) => {

  const [list, setList] = useState(todos);

  return { list, updateList: setList };
};

export default useToDo;