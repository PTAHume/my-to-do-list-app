import { Component, OnInit } from '@angular/core';
import { TodoItem } from './interface/todo-item-interface';
import { TodoListService } from './services/todo-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todoList: TodoItem[] = [];
  title = 'My To Do List APP';

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
  addTodo(newTodo: TodoItem): void {
    this.todoListService.addTodo(newTodo);
  }
  deleteTodo(todo: TodoItem): void {
    this.todoListService.deleteTodo(todo);
  }
  updateTodo(item: any, changes: any): void {
    this.todoListService.updateTodo(item, changes);
  }
}
