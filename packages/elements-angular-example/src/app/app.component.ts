import { Todo } from './shared/models/todo';
import { TodoService } from './shared/services/todo.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ViewModeUnion } from '@inovex.de/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[];
  form: FormGroup;
  mode: ViewModeUnion = 'preview';
  myText = '# Hello World\nI go to home!\n## Foo Bar Text';
  isMenuOpen = true;

  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todos = this.todoService.getRandomTodos();
    this.form = this.fb.group({
      todoName: [{ value: '', disabled: false }],
      todoText: [{ value: '', disabled: false }],
    });
  }

  toggleInputState(): void {
    const control = this.form.get('todoName');
    if (control) control.disabled ? control.enable() : control.disable();
  }

  add() {
    this.todos.push(new Todo(this.form.value.todoName));
  }

  delete(todo: Todo) {
    this.todos = this.todos.filter((currentTodo) => currentTodo !== todo);
  }

  onViewModeChange(evt: Event): void {
    this.mode = (evt as CustomEvent).detail as ViewModeUnion;
  }

  onOpenChange(evt: Event):void {
    this.isMenuOpen = (evt as CustomEvent).detail
  }
}
