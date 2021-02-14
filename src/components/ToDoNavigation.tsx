import { NavLink } from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { doneTodos, openTodos } from "../store/ToDoStore";

export function ToDoNavigation(): JSX.Element {
    const nrOfOpenTodos = useRecoilValue(openTodos);
    const nrOfDoneTodos = useRecoilValue(doneTodos);

    return (
        <ul>
          <li><NavLink exact to="/" activeClassName="active">ToDo ({nrOfOpenTodos})</NavLink></li>
          <li><NavLink exact to="/done" activeClassName="active">Done ({nrOfDoneTodos})</NavLink></li>
        </ul>
    );
}