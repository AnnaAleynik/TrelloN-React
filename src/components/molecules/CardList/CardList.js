import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import CardListItem from '../../atoms/CardListItem/CardListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;

const CardList = (props) => {
  const { list, onRemove } = props;
  return (
    <List>
      {list.map(({ text, id }, i) => (
        <CardListItem key={`${id}`} id ={id}>
          <Link to={`/cards/${id}`}>
            {text}
          </Link>
          <StyledButton error outlined={false} onClick={() => onRemove(i)}>
            X
          </StyledButton>
        </CardListItem>
    ))}
  </List>
  );
};

export default CardList;
