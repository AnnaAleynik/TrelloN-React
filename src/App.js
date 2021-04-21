import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardPage from './components/pages/CardPage';
import Home from './components/pages/Home';
import routes from './config/routes';
import TaskPage from './components/pages/TaskPage';
import CardsPage from './components/pages/CardsPage/CardsPage';
// import ToDoPage from './components/pages/ToDoPage';
import apolloClient from './lib/apolloClient';
import TasksPageWithGraphQL from './components/pages/TasksPageWithGraphQL';
// const initialList = [{ text: 'Позвтракать' }, { text: 'Не опаздать' }];

const App = () => {
  const { HOME, CARDS, CARD, TASK } = routes;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        {/* <Route exact path='/cards'> */}
        <Route exact path={CARDS}>
          <CardsPage />
        </Route>
        <Route exact path={CARD}>
        {/* <Route exact path={TASKS_WITH_GRAPHQL}> */}
          <CardPage />
        </Route>
        <Route path={TASK}>
          <TaskPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
