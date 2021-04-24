import styled from 'styled-components';

const CardCard = styled.div`
  padding: 10px 20px;
  border: 2px solid lightgray;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Card = ({ todo }) => {
  const { title } = todo;

  return (
    <CardCard>
      <Title>{title}</Title>
    </CardCard>
  );
};

export default Card;