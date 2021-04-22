import styled from 'styled-components';
import DefaultTemplate from '../../templates/DefaultTemplate';
import CardList from '../../molecules/CardList';
import CardForm from '../../molecules/CardForm';
import useCards from '../../../hooks/useCards';
import useRemoveCard from '../../../hooks/useRemoveCard';
import useCreateCard from '../../../hooks/useCreateCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;


const CardsPageWithGraphQL = () => {
  const { cards, loading } = useCards();
  const { createCard } = useCreateCard();
  const { remove } = useRemoveCard();

  return (
    <DefaultTemplate loading={loading}>
      <Wrapper>
        <Title>CardsPage with GraphQL</Title>
        <CardList list={cards} onRemove={ remove }/>
        <CardForm onSubmit={createCard} />
      </Wrapper>
    </DefaultTemplate>
  );
};

export default CardsPageWithGraphQL;
