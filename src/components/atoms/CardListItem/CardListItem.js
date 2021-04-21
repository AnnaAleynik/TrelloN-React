import styled from 'styled-components';

const StyledListItem = styled.li( `
    min-width: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  `,
);

const CardListItem = ({ children }) => <StyledListItem>{children}</StyledListItem>;

export default CardListItem;
