import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardPage from './components/pages/CardPage';
import Home from './components/pages/Home';
import routes from './config/routes';
import TaskPage from './components/pages/TaskPage';
import CardsPage from './components/pages/CardsPage/CardsPage';
// import ToDoPage from './components/pages/ToDoPage';

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
