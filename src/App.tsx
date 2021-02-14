import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import DoneScreen from './components/DoneScreen';
import ToDoScreen from './components/ToDoScreen';

export function App() {
  return (
    // Wrapping the whole app with RecoilRoot to get access to recoil's functionality, see https://recoiljs.org/docs/introduction/getting-started/#recoilroot for details.
    <RecoilRoot>
      <div className="App">

      <div className="todoapp-header">
        <h1 id="title">Simplistic ToDo</h1>
        <h4>A most simplistic ToDo List in React.</h4>
      </div>

      <BrowserRouter>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">ToDo</NavLink></li>
          <li><NavLink exact to="/done" activeClassName="active">Done</NavLink></li>
        </ul>

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
    </RecoilRoot>
  );

}

