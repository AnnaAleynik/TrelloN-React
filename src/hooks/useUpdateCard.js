import { useMutation } from '@apollo/client';
import updateCardMutation from '../graphql/mutations/updateCard';
import getCards from '../graphql/queries/getCards';

const useUpdateCard = () => {
  const [mutation, { data, error, loading }] = useMutation(updateCardMutation, { refetchQueries: [{ query: getCards }] });

  const updateCard = async ({ title, id }) => {
    const variables = { input: { title, id } };
    await mutation({ variables });
  };

  return { updateCard, data, error, loading };
};

export default useUpdateCard;