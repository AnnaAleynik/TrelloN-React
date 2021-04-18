import styled from 'styled-components';

const CardCard = styled.div`
  padding: 10px 20px;
  border: 2px solid lightgray;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Card = ({ todo }) => {
  const { text } = todo;

  return (
    <CardCard>
      <Title>{text}</Title>
    </CardCard>
  );
};

export default Card;