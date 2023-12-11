import FirstLesson from './FirstLesson';
import ToDoListBox from './ToDoListBox';
import SecondLesson from './SecondLesson';

export const App = () => {
  return (
    <div>
      <p> React template</p>
      <ul>
        {/* <li>
          <p> II заняття</p>
          <FirstLesson />
        </li>
        <li>
          <ToDoListBox />
        </li> */}
        <li>
          <SecondLesson />
        </li>
      </ul>
    </div>
  );
};
