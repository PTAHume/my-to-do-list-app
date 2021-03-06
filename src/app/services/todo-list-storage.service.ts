import { Injectable } from '@angular/core';
import { TodoItem } from '../interface/todo-item-interface';
@Injectable({
  providedIn: 'root',
})
export class TodoListStorageService {
  private todoList: TodoItem[] = [];

  saveTodoList(storageKey: string, todoList: TodoItem[]) {
    localStorage.setItem(storageKey, JSON.stringify(todoList));
  }

  getTodoList(storageKey: string): TodoItem[] {
    this.todoList = JSON.parse(
      localStorage.getItem(storageKey) as any
    ) as TodoItem[];
    return this.todoList;
  }
}
