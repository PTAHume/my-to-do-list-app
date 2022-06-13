import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interface/todo-item-interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item-input',
  templateUrl: './todo-item-input.component.html',
  styleUrls: ['./todo-item-input.component.css'],
})
export class TodoItemInputComponent {
  todoItem: TodoItem | undefined;
  @Output() newToDoItem: EventEmitter<TodoItem> = new EventEmitter();

  todoForm = new FormGroup({
    newTodo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get todoControls() {
    return this.todoForm.controls;
  }

  addNewTodoItem(newItemValue: string) {
    this.newToDoItem.emit({ itemValue: newItemValue });
    this.todoForm.get('newTodo')?.setValue('');
    this.todoForm.reset();
  }
}
