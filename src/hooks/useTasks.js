import { useQuery } from "@apollo/client"
import getTasks from "../graphql/getTasks";

const useTasks = () => {
  const { data, loading } = useQuery(getTasks);

  return {
    tasks: data?.tasks || [],
    loading,
  };
};

export default useTasks;
