import { useMutation } from '@apollo/client';
import getCards from '../graphql/queries/getCards';
import removeCard from '../graphql/mutations/removeCard';

const useRemoveCard = () => {
  const [mutation, { data, error, loading }] = useMutation(removeCard, {
    refetchQueries: [{ query: getCards }],
  });

  const remove = async (id) => {
    await mutation({ variables: { input: { id } } });
  };

  return {
    remove,
    data,
    error,
    loading,
  };
};

export default useRemoveCard;