import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';
// import {
//   InoCheckbox,
//   InoIcon,
//   InoInput,
//   InoList,
//   InoListDivider,
//   InoListItem,
// } from '../shared/InovexElements';

const InoCheckbox = import.meta.glob('./shared/InovexElements');
const InoIcon = import.meta.glob('./shared/InovexElements');
const InoInput = import.meta.glob('./shared/InovexElements');
const InoList = import.meta.glob('./shared/InovexElements');
const InoListDivider = import.meta.glob('./shared/InovexElements');
const InoListItem = import.meta.glob('./shared/InovexElements');

export const HomeTodoApp: React.FC = () => {
  const [newTodoName, setTodoName] = React.useState('');

  const [todos, setTodos] = React.useState<string[]>([]);
  const [doneTodos, setDoneTodos] = React.useState<string[]>([]);

  const onValueChanged = (value: CustomEvent<string>) => {
    setTodoName(value.detail);
  };

  const addTodo = () => {
    if (newTodoName && newTodoName.length !== 0) {
      setTodos([...todos, newTodoName]);
      setTodoName('');
    }
  };

  const doTodo = (todo: string) => {
    const filteredTodos = todos.filter((currentTodo) => currentTodo !== todo);
    setTodos(filteredTodos);
    setDoneTodos([...doneTodos, todo]);
  };

  const undoTodo = (todo: string) => {
    const filteredDoneTodo = doneTodos.filter(
      (currentTodo) => currentTodo !== todo
    );
    setTodos([...todos, todo]);
    setDoneTodos(filteredDoneTodo);
  };

  const todoListTemplate = () => (
    <InoList>
      {todos.map((todo) => (
        <InoListItem key={todo} text={todo}>
          <InoCheckbox
            slot="leading"
            onCheckedChange={() => doTodo(todo)}
          />
        </InoListItem>
      ))}
    </InoList>
  );

  const doneListTemplate = () => (
    <InoList>
      {doneTodos.map((todo) => (
        <InoListItem key={todo} text={todo}>
          <InoCheckbox
            slot="leading"
            checked
            onCheckedChange={() => undoTodo(todo)}
          />
        </InoListItem>
      ))}
    </InoList>
  );

  const listTemplate = () => {
    return (
      <>
        <InoList>
          {todoListTemplate()}
          <InoListDivider betweenLists />
          {doneListTemplate()}
        </InoList>
      </>
    );
  };

  return (
    <div className="App">
      <h2>inovex elements Todo-List</h2>
      <InoInput
        type="text"
        value={newTodoName}
        onValueChange={(value) => onValueChanged(value)}
        placeholder="What needs to be done..."
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      >
        <InoIcon
          icon={'add'}
          slot={'icon-trailing'}
          clickable
          onClick={() => addTodo()}
        />
      </InoInput>
      {listTemplate()}
    </div>
  );
};

ReactDOM.render(<HomeTodoApp />, document.getElementById('root'));
