import FirstLesson from './FirstLesson';
import ToDoList from './ToDoList';


export const App = () => {
  return (
    <div>
      <p> React template</p>
      <ul>
        <li>
          <p> II заняття</p>
          <FirstLesson />
        </li>
        <li>
          <p>
            Колекція нотатків
            <ToDoList/>
          </p>
        </li>
      </ul>
    </div>
  );
};
