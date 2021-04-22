import { useMutation } from '@apollo/client';
import getCards from '../graphql/queries/getCards';
import createCardMutation from '../graphql/mutations/createCard';

const useCreateCard = () => {
  const [mutation, { data, error, loading }] = useMutation(createCardMutation, {
    refetchQueries: [{ query: getCards}],
  });
  const createCard = async (title) => {
    await mutation({ variables: { input: { title } } });
  };

  return {
    createCard,
    data,
    error,
    loading,
  };
};

export default useCreateCard;
