import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Content = styled.section`
  max-width: 32rem;
  width: 100%;
  margin: 0 auto;
`;

const DefaultTemplate = ({ children, loading }) => {
  if (loading){
    return <p>loading...</p>
  }
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default DefaultTemplate;
