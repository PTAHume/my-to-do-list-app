import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../interface/todo-item-interface';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  isEditMode: boolean;
  originalValue: string;
  @Input() todo: TodoItem;
  @Output() deleteTodo: EventEmitter<TodoItem> = new EventEmitter();
  @Output() updateTodo: EventEmitter<any> = new EventEmitter();

  todoForm = new FormGroup({
    todoEdit: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get todoControls() {
    return this.todoForm.controls;
  }

  removeItem(): void {
    this.deleteTodo.emit(this.todo);
  }

  ngOnInit(): void {
    this.originalValue = this.todo.itemValue;
  }

  completeItem(): void {
    this.todo.completed = !this.todo.completed;
    this.updateTodo.emit({
      itemValue: this.todo,
      changes: { completed: !this.todo.completed },
    });
  }

  editTodo(): void {
    this.isEditMode = true;
  }

  cancelEdit(): void {
    this.originalValue = this.todo.itemValue;
    this.isEditMode = false;
  }

  saveEdit(): void {
    this.todo.itemValue = this.originalValue;
    this.updateTodo.emit({
      itemValue: this.todo,
      changes: { completed: !this.todo.completed },
    });
    this.isEditMode = false;
  }
}
