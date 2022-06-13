import { Injectable } from '@angular/core';
import { TodoItem } from '../interface/todo-item-interface';
import { TodoListStorageService } from './todo-list-storage.service';

const todoListStorageKey = 'Todo_List_4';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: TodoItem[];

  constructor(private todoListStorage: TodoListStorageService) {
    this.todoList = todoListStorage.getTodoList(todoListStorageKey) || [];
  }

  saveTodoList(): void {
    this.todoListStorage.saveTodoList(todoListStorageKey, this.todoList);
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addTodo(todo: TodoItem): void {
    this.todoList.push(todo);
    this.saveTodoList();
  }

  updateTodo(todo: TodoItem, changes: any): void {
    const itemIdex = this.todoList.indexOf(todo);
    this.todoList[itemIdex] = { ...todo, ...changes };
    this.saveTodoList();
  }

  deleteTodo(todo: TodoItem): void {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    this.saveTodoList();
  }
}
