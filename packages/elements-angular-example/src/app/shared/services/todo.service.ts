import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  getRandomTodos(count = 3): Array<Todo> {
    const todos = [];
    for (let i = 0; i < count; i++) {
      todos.push(new Todo(`Todo ${i}`));
    }
    return todos;
  }
}
