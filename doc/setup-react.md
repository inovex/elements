# Integrate with React

> We set up a demo project with React to show you how to integrate the components into a newly generated React
> project. See ([our React example project](https://gitlab.inovex.de/inovex-elements/example-react)) for more details.
>
> These instructions are based on `react@16.13.1` and [`create-react-app@3.4.1`](https://github.com/facebook/create-react-app).
>
> If you want to use TypeScript, please see instructions from the [Adding TypeScript Section on create-react-app.dev](https://facebook.github.io/create-react-app/docs/adding-typescript).

## 0) Prepare your project

First of all you should make sure your current setup without the inovex elements work and boot properly.
If that's the case you can proceed.

## 1) Install `@inovex/elements-react`

We provide an integration layer package for React so you are able to integrate the elements as any other dependency
into your React project. The package match the name of the respective inovex element in PascalCase (e.g. `InoButton` for `ino-button`).

We're not yet on npm, so you need to set a npm config before you can install the package. The following command
will update your local npm config to always request `@inovex` prefixed packages from our private
registry and not from npmjs.org. To do so, copy the following command into your terminal and execute it:

```sh
$ npm config set @inovex:registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
```

Now you are ready to add the package `@inovex/elements-react` to your project using `yarn` or `npm`:

### Instructions for npm:

```sh
$ npm install @inovex/elements-react --save
```

### Instructions for Yarn:

```sh
$ yarn add @inovex/elements-react
```

### 2) Use the components

> A hint on icons: The React integration layer automatically imports the icons. You don't have to import
> them manually.

You have to import each React component in your corresponding component you want to use them in. Here's
an example how to do this:

```jsx
// App.tsx
import React from 'react';
import './App.css';
import {
  InoCheckbox,
  InoIcon,
  InoInput,
  InoList,
  InoListDivider,
  InoListItem
} from '@inovex/elements-react';

const App: React.FC = () => {

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
    const filteredTodos = todos.filter(currentTodo => currentTodo !== todo);
    setTodos(filteredTodos);
    setDoneTodos([...doneTodos, todo]);
  };

  const undoTodo = (todo: string) => {
    const filteredDoneTodo = doneTodos.filter(currentTodo => currentTodo !== todo);
    setTodos([...todos, todo]);
    setDoneTodos(filteredDoneTodo);
  };

  const todoListTemplate = () => (
    <InoList>
      {todos.map(todo => (
          <InoListItem key={todo} inoText={todo}>
            <InoCheckbox slot="ino-leading" onCheckedChange={() => doTodo(todo)}/>
          </InoListItem>
        )
      )}
    </InoList>
  );

  const doneListTemplate = () => (
    <InoList>
      {doneTodos.map(todo => (
          <InoListItem key={todo} inoText={todo}>
            <InoCheckbox slot="ino-leading" checked onCheckedChange={() => undoTodo(todo)}/>
          </InoListItem>
        )
      )}
    </InoList>
  );

  const listTemplate = () => {
    return (
      <>
        <InoList>
          {todoListTemplate()}
          <InoListDivider inoBetweenLists/>
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
        onValueChange={value => onValueChanged(value)}
        placeholder="What needs to be done..."
        inoIconTrailing
        onKeyPress={e => e.key === 'Enter' && addTodo()}
      >
        <InoIcon
          inoIcon={'add'}
          slot={'ino-icon-trailing'}
          inoClickable
          onClick={() => addTodo()}
        />
      </InoInput>
      {listTemplate()}
    </div>
  );
};

export default App;
```
