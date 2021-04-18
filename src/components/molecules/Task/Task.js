
import styled from 'styled-components';

const TaskCard = styled.div`
  padding: 10px 20px;
  border: 2px solid lightgray;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Task = ({ todo }) => {
  const { text } = todo;

  return (
    <TaskCard>
      <Title>{text}</Title>
    </TaskCard>
  );
};

export default Task;