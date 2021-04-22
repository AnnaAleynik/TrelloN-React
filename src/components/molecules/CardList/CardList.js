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
      {list.map(({ title, id }, i) => (
        <CardListItem key={`${id}-${i}`} id ={id}>
          <Link to={`/cards/${id}`}>
            {title}
          </Link>
          <StyledButton error outlined={false} onClick={() => onRemove(id)}>
            X
          </StyledButton>
        </CardListItem>
    ))}
  </List>
  );
};

export default CardList;
