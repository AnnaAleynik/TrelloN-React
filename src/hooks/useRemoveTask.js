import { useMutation } from "@apollo/client";
import removeTask from "../graphql/mutations/createTask";
import getTasks from "../graphql/queries/getTasks";

const useRemoveTaskMutation = () => {
  const [mutation, {data, error, loading}] = useMutation(removeTask, {
    refetchQueries: [{query: getTasks}],
  });

  const removeTask = async id => {
    await mutation({variables: {input: {id}}})
  };

  return {
    createTask,
    data,
    error,
    loading
  }
};

export default useRemoveTaskMutation;
