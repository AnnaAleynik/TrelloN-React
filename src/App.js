import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TasksPage from './components/pages/TasksPage';
import Home from './components/pages/Home';
import routes from './config/routes';
import TaskPage from './components/pages/TaskPage';
import CardsPage from './components/pages/CardsPage/CardsPage';
// import ToDoPage from './components/pages/ToDoPage';

// const initialList = [{ text: 'Позвтракать' }, { text: 'Не опаздать' }];

const App = () => {
  const { HOME, TASKS, TASK } = routes;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME}>
          <Home />
        </Route>
        <Route exact path='/cards'>
          <CardsPage />
        </Route>
        <Route exact path={TASKS}>
          <TasksPage />
        </Route>
        <Route path={TASK}>
          <TaskPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
