import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Actions = styled.div`
  margin: 0 10px 0 auto;
  width: max-content;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;

const Edit = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const CardCard = styled.div`
  padding: 10px 20px;
  border: 2px solid lightgray;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Card = ({ todo }) => {
  const { title, id } = todo;
  const { removeCard } = useRemoveCard();

  const [isCardEdited, setIsCardEdited] = useState(false);

  const onRemove = async () => {
    await removeCard(id);
  };

  const onEditComplete = () => {
    setIsCardEdited(false);
  };

  return (
    <CardCard>
     <Actions>
      <Edit onClick={() => setIsCardEdited(true) }>Edit</Edit>
      <StyledButton error outlined={false} onClick={onRemove}>
        X
      </StyledButton>
      </Actions>

      {isCardEdited ? (
        <CardEditForm card={todo} onEditComplete={onEditComplete} />
      ) : (
        <Link to={`tasks/${id}`}>
          <Title>{title}</Title>
        </Link>
      )}
   </CardCard>
  );
};

export default Card;
