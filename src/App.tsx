import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DoneScreen from './components/DoneScreen';
import { ToDoNavigation } from './components/ToDoNavigation';
import ToDoScreen from './components/ToDoScreen';

export function App() {
  
  return (
    <div className="App">

    <div className="todoapp-header">
      <h1 id="title">Simplistic ToDo</h1>
      <h4>A most simplistic ToDo List in React.</h4>
    </div>

    <BrowserRouter>
      <ToDoNavigation />

      <Switch>
        <Route path="/done" component={DoneScreen}/>
        <Route path="/" component={ToDoScreen}/>
      </Switch>
    </BrowserRouter>

    <footer className="info">
      <p>JavaScript Example / Initial template from <a
          href="https://github.com/tastejs/todomvc-app-template">todomvc-app-template</a>
      </p>
    </footer>
    </div>
  );

}

