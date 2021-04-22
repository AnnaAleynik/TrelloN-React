import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import CardPage from './components/pages/CardPage';
import Home from './components/pages/Home';
import routes from './config/routes';
import TaskPage from './components/pages/TaskPage';
import CardsPage from './components/pages/CardsPage/CardsPage';
// import ToDoPage from './components/pages/ToDoPage';
import apolloClient from './lib/apolloClient';
import CardsPageWithGraphQL from './components/pages/CardsPageWithGraphQL';
// const initialList = [{ text: 'Позвтракать' }, { text: 'Не опаздать' }];

const App = () => {
  const { HOME, CARDS, CARDS_WITH_GRAPHQL, CARD, TASK } = routes;
  return (
    <ApolloProvider client={apolloClient}>
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
        <Route exact path={CARDS_WITH_GRAPHQL}>
          <CardsPageWithGraphQL />
        </Route>
        <Route path={TASK}>
          <TaskPage />
        </Route>
      </Switch>
    </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
