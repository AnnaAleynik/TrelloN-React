import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardList from '../../molecules/CardList';
import CardForm from '../../molecules/CardForm';
import Button from '../../atoms/Button';
import DefaultTemplate from '../../templates/DefaultTemplate';
import useCardToDo from '../../../hooks/useCardToDo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const CardsPage = () => {
  const { list: initialList, updateList } = useCardToDo();

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
    setList([...list, { title: value }]);
  };
  const handleRemove = (i) => setList(list.filter((elem, index) => i !== index));

  const onSave = () => {
    updateList(list);
  };

  const onDismiss = () => {
    setList(initialList);
  };

  return (
    <DefaultTemplate>
      <Wrapper>
        <Title>Your Cards</Title>
        <CardForm onSubmit={onAddNewListItem} />
        <CardList list={list} onRemove={handleRemove} />
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

export default CardsPage;
