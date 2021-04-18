import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import CheckBox from '../../atoms/Checkbox';
import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;

const ToDoList = (props) => {
  const { list, onRemove, onCheck } = props;
  return (
    <List>
      {list.map(({ text, checked, id }, i) => (
        <ToDoListItem key={`${id}`} checked={checked} id ={id}>
          <CheckBox onChange={(ev) => onCheck(ev, i)} checked={checked} />
          <Link to={`tasks/${id}`}>
            {text}
          </Link>
          <StyledButton error outlined={false} onClick={() => onRemove(i)}>
            X
          </StyledButton>
        </ToDoListItem>
    ))}
  </List>
  );
};

export default ToDoList;
