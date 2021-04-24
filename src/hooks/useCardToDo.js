import { useState } from 'react';
import cards from '../data/cards';

const useCardToDo = () => {
  const [list, setList] = useState(cards);

  return { list, updateList: setList };
};

export default useCardToDo;