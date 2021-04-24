
import styled from 'styled-components';

const TaskCard = styled.div`
  padding: 10px 20px;
  border: 2px solid lightgray;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Description = styled.h3`
  font-size: 16px;
`;

const Task = ({ todo }) => {
  const { title } = todo;
  const { description } = todo;

  return (
    <TaskCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TaskCard>
  );
};

export default Task;