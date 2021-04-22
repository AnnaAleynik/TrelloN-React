import useTasks from "../../../hooks/useTasks"

const TaskPage = () => {
  const { tasks, loading } = useTasks();

  if (loading) {
    return <p>loading</p>
  }

  return (
    <Title>PAge with graphql</Title>
    
  )
}