import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ToDoList from '../../molecules/ToDoList';
import DefaultTemplate from '../../templates/DefaultTemplate';
import ToDoForm from '../../molecules/ToDoForm';
import Button from '../../atoms/Button';
import useToDo from '../../../hooks/useToDo';
import todos from '../../../data/todos';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const CardPage = () => {
  const { id: queryId } = useParams();
  console.log("quey", queryId);

  const tasks = todos.filter(({ c_id }) => c_id === +queryId);

  const { list: initialList, updateList } = useToDo(tasks);

  const [list, setList] = useState(initialList);
  const [listUnSaved, setListUnsaved] = useState(false);

  useEffect(() => {
    if (JSON.stringify(initialList) !== JSON.stringify(list)) {
      setListUnsaved(true);
    } else {
      setListUnsaved(false);
    }
  }, [initialList, list, listUnSaved]);

  const onAddNewListItem = (value) => {
    setList([...list, { text: value }]);
  };
  const handleRemove = (i) => setList(list.filter((elem, index) => i !== index));

  const onSave = () => {
    updateList(list);
  };

  const onDismiss = () => {
    setList(initialList);
  };

  const handleCheck = (ev, i) => {
    const {
      target: { checked },
    } = ev;
    setList((currentList) => currentList.map((listItem, index) => (i === index ? { ...listItem, checked } : listItem)));
  };

  let history = useHistory();

  return (
    <DefaultTemplate>
      <Wrapper>
        <Title>ToDoPage</Title>
        <Link to={`/cards`}>
            Back to cards
        </Link>
        <button onClick={history.goBack}>Back</button>
        <ToDoForm onSubmit={onAddNewListItem} />
        <ToDoList list={list} onRemove={handleRemove} onCheck={handleCheck} />
        {listUnSaved && (
          <div>
            <Button onClick={onDismiss}>Dismiss</Button>
            <Button primary onClick={onSave}>
              Save
            </Button>
          </div>
        )}
      </Wrapper>
    </DefaultTemplate>
  );
};

export default CardPage;
