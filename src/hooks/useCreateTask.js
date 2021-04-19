import { useMutation } from "@apollo/client";
import createTask from "../graphql/mutations/createTask";
import getTasks from "../graphql/queries/getTasks";

const useCreateTaskMutation = () => {
  const [mutation, {data, error, loading}] = useMutation(createTask, {
    refetchQueries: [{query: getTasks}],
  });

  const createTask = async title => {
    await mutation({variables: {input: {title}}})
  };

  return {
    createTask,
    data,
    error,
    loading
  }
};

export default useCreateTaskMutation;
